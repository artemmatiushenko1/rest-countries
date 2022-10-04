import { ICountry } from './../interfaces/country';
import { Request } from 'lib/request';

class CountryService {
  getAllCountries = () => Request.get<ICountry[]>(`/all`);

  getCountryByCode = (code: string) => Request.get<ICountry>(`/alpha/${code}`);

  getCountriesByRegion = (region: string) =>
    Request.get<ICountry[]>(`/region/${region}`);

  getCountriesByName = (name: string) =>
    Request.get<ICountry[]>(`/name/${name}`);
}

export default new CountryService();
