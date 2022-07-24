import CountryStore from './country-store';

export interface IRootStore {
  countriesStore: CountryStore;
}

class RootStore implements IRootStore {
  countriesStore = new CountryStore();
}

export default RootStore;
