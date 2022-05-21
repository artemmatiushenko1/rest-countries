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
      {countries.map(({ name, flag, population, region, capital }) => {
        return (
          <CountryItem
            key={name}
            name={name}
            flag={flag}
            population={population}
            region={region}
            capital={capital && capital.join(', ')}
          />
        );
      })}
    </S.Grid>
  );
};

export default CountriesList;
