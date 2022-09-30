import { ISelectOption } from 'interfaces/select-option';
import { useSearchParams } from 'react-router-dom';
import { useStores } from 'hooks/use-stores';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { SearchInput } from 'components/search-input';
import { Box, SelectChangeEvent } from '@mui/material';
import { Select } from 'components/select';
import { CountriesList } from 'components/countries-list';

const selectOptions: ISelectOption[] = [
  { value: 'africa', displayText: 'Africa' },
  { value: 'americas', displayText: 'Americas' },
  { value: 'asia', displayText: 'Asia' },
  { value: 'europe', displayText: 'Europe' },
  { value: 'oceania', displayText: 'Oceania' },
];

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [region, setRegion] = useState(searchParams.get('region') || '');
  const [searchValue, setSearchValue] = useState('');
  const {
    countriesStore: {
      getAllCountries,
      loadMoreCountries,
      getAllCountriesLoading,
      getCountriesByRegion,
      getCountriesByName,
      hasMoreCountries,
      countriesPagination: { currentItems: countries },
    },
  } = useStores();

  useEffect(() => {
    if (countries.length === 0 && !region) {
      getAllCountries();
    }

    if (region && countries.length === 0) {
      getCountriesByRegion(region);
    }
  }, []);

  useEffect(() => {
    if (searchValue) {
      const debounceTimerId = setTimeout(() => {
        getCountriesByName(searchValue);
      }, 1500);

      return () => {
        clearTimeout(debounceTimerId);
      };
    }
  }, [searchValue]);

  const onRegionChangeHandler = (e: SelectChangeEvent<typeof region>) => {
    const regionValue = e.target.value;
    setRegion(regionValue);
    setSearchParams({ region: regionValue });
    getCountriesByRegion(regionValue);
  };

  const onSearchInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box
      sx={{
        paddingTop: '49px',
        '@media (max-width: 1340px)': {
          padding: '49px 30px 0 30px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          '@media (max-width: 600px)': {
            flexDirection: 'column',
          },
        }}
      >
        <SearchInput
          value={searchValue}
          onChange={onSearchInputChangeHandler}
          sx={{
            '@media (max-width: 600px)': {
              maxWidth: 'initial',
            },
          }}
        />
        <Select
          options={selectOptions}
          placeholder="Filter by Region"
          value={region}
          onChange={onRegionChangeHandler}
          sx={{
            '@media (max-width: 600px)': {
              maxWidth: 'initial',
            },
          }}
        />
      </Box>
      <CountriesList
        loadMore={loadMoreCountries}
        loading={getAllCountriesLoading}
        hasMore={hasMoreCountries}
        countries={countries}
      />
    </Box>
  );
};

export default observer(HomePage);
