import { IPagination } from 'interfaces/pagination';
import { ICountry, IBorder } from './../interfaces/country';
import { makeAutoObservable, runInAction } from 'mobx';
import CountryService from 'services/country.service';
import { AxiosResponse } from 'axios';

const DEFAULT_PAGINATION: IPagination<ICountry> = {
  currentPage: 1,
  items: [] as ICountry[],
  totalPages: 0,
  totalItems: 0,
  skip: 0,
  take: 20,
  hasMore: false,
};

class CountryStore {
  // add country search text
  countries: ICountry[] = [];
  countriesPagination = DEFAULT_PAGINATION;
  borderCountries: IBorder[] = [];
  getAllCountriesLoading = false;
  getCountryLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCountriesPagination(countriesData: ICountry[]) {
    this.countriesPagination = {
      currentPage: DEFAULT_PAGINATION.currentPage,
      skip: DEFAULT_PAGINATION.skip,
      take: DEFAULT_PAGINATION.take,
      items: countriesData.slice(
        DEFAULT_PAGINATION.skip,
        DEFAULT_PAGINATION.take
      ),
      totalItems: countriesData.length,
      totalPages: Math.ceil(
        countriesData.length / this.countriesPagination.take
      ),
      hasMore:
        [...countriesData].splice(
          DEFAULT_PAGINATION.skip + DEFAULT_PAGINATION.take,
          DEFAULT_PAGINATION.take
        ).length > 0,
    };
  }

  getAllCountries = async () => {
    this.getAllCountriesLoading = true;

    try {
      const response = await CountryService.getAllCountries();

      runInAction(() => {
        this.countries = response.data;
        this.setCountriesPagination(response.data);
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
      runInAction(() => {
        this.countriesPagination = {
          ...this.countriesPagination,
          currentPage: this.countriesPagination.currentPage + 1,
          skip: this.countriesPagination.skip + this.countriesPagination.take,
          items: [...this.countriesPagination.items].concat(
            [...this.countries].splice(
              this.countriesPagination.skip + this.countriesPagination.take,
              this.countriesPagination.take
            )
          ),
          totalItems: this.countries.length,
          totalPages: Math.ceil(
            this.countries.length / this.countriesPagination.take
          ),
          hasMore:
            [...this.countries].splice(
              this.countriesPagination.skip + this.countriesPagination.take * 2,
              this.countriesPagination.take
            ).length > 0,
        };
      });
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
        this.setCountriesPagination(response.data);
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
        this.setCountriesPagination(response.data);
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
