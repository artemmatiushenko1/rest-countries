import { ICountry, IBorder } from './../interfaces/country';
import { makeAutoObservable, runInAction } from 'mobx';
import CountryService from 'services/country.service';
import { AxiosResponse } from 'axios';
import { Pagination } from 'lib/pagination';

class CountryStore {
  // add country search text
  countries: ICountry[] = [];
  countriesPagination = new Pagination<ICountry>({
    items: [],
    skip: 0,
    take: 20,
  });
  borderCountries: IBorder[] = [];
  getAllCountriesLoading = false;
  getCountryLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getAllCountries = async () => {
    this.getAllCountriesLoading = true;

    try {
      const response = await CountryService.getAllCountries();

      runInAction(() => {
        this.countries = response.data;
        this.countriesPagination.setInitialPagination({
          items: response.data,
        });
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.getAllCountriesLoading = false;
    }
  };

  loadMoreCountries = async () => {
    this.getAllCountriesLoading = true;

    try {
      this.countriesPagination.getNextPage();
    } catch (err) {
      console.log(err);
    } finally {
      this.getAllCountriesLoading = false;
    }
  };

  get hasMoreCountries() {
    return this.countriesPagination.hasMore;
  }

  getCountry = async (code: string) => {
    this.getCountryLoading = true;

    try {
      const response = await CountryService.getCountryByCode(code);

      const borders = response.data.borders;
      if (borders?.length !== 0 && borders) {
        const bordersCountriesResponse = await this.getBorderCountriesNames(
          borders
        );
        runInAction(() => {
          this.borderCountries = bordersCountriesResponse ?? [];
        });
      }

      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      this.getCountryLoading = false;
    }
  };

  getCountriesByRegion = async (region: string) => {
    this.getAllCountriesLoading = true;

    try {
      const response = await CountryService.getCountriesByRegion(region);

      runInAction(() => {
        this.countries = response.data;
        this.countriesPagination.setInitialPagination({ items: response.data });
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.getAllCountriesLoading = false;
    }
  };

  getCountriesByName = async (name: string) => {
    this.getAllCountriesLoading = true;

    try {
      const response = await CountryService.getCountriesByName(name);

      runInAction(() => {
        this.countries = response.data;
        this.countriesPagination.setInitialPagination({ items: response.data });
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.getAllCountriesLoading = false;
    }
  };

  getBorderCountriesNames = async (countryCodes: string[]) => {
    try {
      const responses = await Promise.allSettled(
        countryCodes.map((code) => CountryService.getCountryByCode(code))
      );

      const borderCountries = (
        responses.filter(
          (res) => res.status === 'fulfilled'
        ) as PromiseFulfilledResult<AxiosResponse<ICountry>>[]
      ).map((res) => res.value.data);

      return borderCountries?.map((country) => ({
        name: country.name,
        alpha3Code: country.alpha3Code,
      }));
    } catch (err) {
      console.log(err);
    }
  };
}

export default CountryStore;
