import { ICountry } from './../interfaces/country';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';

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
      const response = await axios.get<ICountry[]>(
        process.env.REACT_APP_API_URL as string
      );
      this.countries = response.data;
    } catch (err) {
      console.log(err);
    } finally {
      this.getCountriesLoading = false;
    }
  };
}

export default CountryStore;
