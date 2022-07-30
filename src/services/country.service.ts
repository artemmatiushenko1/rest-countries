import { ICountry } from './../interfaces/country';
import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_API_URL as string;

class CountryService {
  getAllCountries = () => axios.get<ICountry[]>(`${BASE_API_URL}/all`);

  getCountryByCode = (code: string) =>
    axios.get<ICountry>(`${BASE_API_URL}/alpha/${code}`);

  getCountriesByRegion = (region: string) =>
    axios.get<ICountry[]>(`${BASE_API_URL}/region/${region}`);
}

export default new CountryService();
