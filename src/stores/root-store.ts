import CountryStore from './country-store';
import ThemeStore from './theme-store';

class RootStore {
  countriesStore = new CountryStore();
  themeStore = new ThemeStore();
}

export default RootStore;
