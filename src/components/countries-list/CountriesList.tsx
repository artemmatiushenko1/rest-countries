import CountryItem from 'components/country-item/CountryItem';
import { ICountry } from 'interfaces/country';
import React from 'react';
import * as S from './CountriesList.style';

interface CountriesListProps {
  countries: ICountry[];
}

const CountriesList: React.FC<CountriesListProps> = ({ countries }) => {
  return (
    <S.Grid>
      {countries.map(({ name, flags, population, region, capital }) => {
        return (
          <CountryItem
            key={name}
            name={name}
            flags={flags}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </S.Grid>
  );
};

export default CountriesList;
