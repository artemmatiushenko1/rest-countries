export interface ICurrency {
  name: string;
  symbol: string;
  code: string;
}

export interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface IFlags {
  svg: string;
  png: string;
}

export interface ICountry {
  name: string;
  alpha3Code: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  flags: IFlags;
  altSpellings: string[];
  topLevelDomain: string[];
  currencies: ICurrency[];
  languages: ILanguage[];
  borders: string[];
}
