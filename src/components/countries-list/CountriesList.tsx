import CountryItem from 'components/country-item/CountryItem';
import { ICountry } from 'interfaces/country';
import React, { useCallback, useRef } from 'react';
import * as S from './CountriesList.style';
import { Loader } from 'components/loader';

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
  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          const [target] = entries;
          if (target.isIntersecting && hasMore) {
            loadMore();
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        }
      );

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <S.Grid>
        {countries.map(
          ({ name, flags, population, region, capital, alpha3Code }, index) => {
            return countries.length === index + 1 ? (
              <CountryItem
                ref={lastElementRef}
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
