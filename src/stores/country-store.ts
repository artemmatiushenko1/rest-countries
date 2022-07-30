import { ICountry } from './../interfaces/country';
import { makeAutoObservable } from 'mobx';
import CountryService from 'services/country.service';

class CountryStore {
  countries: ICountry[] = [];
  getAllCountriesLoading = false;
  getCountryLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getAllCountries = async () => {
    this.getAllCountriesLoading = true;

    try {
      const response = await CountryService.getAllCountries();
      this.countries = response.data;
    } catch (err) {
      console.log(err);
    } finally {
      this.getAllCountriesLoading = false;
    }
  };

  getCountry = async (code: string) => {
    this.getCountryLoading = true;

    try {
      const response = await CountryService.getCountryByCode(code);
      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      this.getCountryLoading = false;
    }
  };
}

export default CountryStore;
