import React from 'react';
import CountryItem from 'components/country-item/CountryItem';
import { ICountry } from 'interfaces/country';
import * as S from './CountriesList.style';
import { Loader } from 'components/loader';
import { useInfiniteScroll } from 'hooks/use-infinite-scroll';
import { toJS } from 'mobx';

interface CountriesListProps {
  countries: ICountry[];
  hasMore: boolean;
  loading: boolean;
  loadMore: () => void;
}

const CountriesList: React.FC<CountriesListProps> = ({
  countries,
  loadMore,
  loading,
  hasMore,
}) => {
  const { ref } = useInfiniteScroll(loading, hasMore, loadMore);
  // console.log(toJS(countries), { hasMore });

  return (
    <>
      <S.Grid>
        {countries.map(
          ({ name, flags, population, region, capital, alpha3Code }, index) => {
            return countries.length === index + 1 ? (
              <CountryItem
                ref={ref}
                key={name}
                name={name}
                flags={flags}
                population={population}
                region={region}
                capital={capital}
                to={`/country/${alpha3Code}`}
              />
            ) : (
              <CountryItem
                key={name}
                name={name}
                flags={flags}
                population={population}
                region={region}
                capital={capital}
                to={`/country/${alpha3Code}`}
              />
            );
          }
        )}
      </S.Grid>
      {loading && <Loader />}
    </>
  );
};

export default CountriesList;
