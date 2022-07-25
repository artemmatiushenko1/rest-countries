import { ICountry } from './../interfaces/country';
import { makeAutoObservable } from 'mobx';
import CountryService from 'services/country.service';

interface ICountryStore {
  countries: ICountry[];
  getCountriesLoading: boolean;
}

class CountryStore implements ICountryStore {
  countries: ICountry[] = [];
  getCountriesLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCountries = async () => {
    this.getCountriesLoading = true;

    try {
      const response = await CountryService.getAllCountries();
      this.countries = response.data;
    } catch (err) {
      console.log(err);
    } finally {
      this.getCountriesLoading = false;
    }
  };
}

export default CountryStore;
