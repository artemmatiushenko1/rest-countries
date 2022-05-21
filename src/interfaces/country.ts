interface currencyInfo {
  name: string;
  symbol: string;
}

interface nativeNameInfo {
  official: string;
  common: string;
}

export interface ICountry {
  name: string;
  nativeName: Record<string, nativeNameInfo>;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  flag: string;
  altSpellings: string[];
  tld: string[];
  currencies: Record<string, currencyInfo>;
  languages: Record<string, string>;
  borders: string[];
}
