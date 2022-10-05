import { ISelectOption } from 'interfaces/select-option';
import { useStores } from 'hooks/use-stores';
import { useState, useEffect, ChangeEvent } from 'react';
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
  const [region, setRegion] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchInputTouched, setSearchInputTouched] = useState(false);

  const {
    countriesStore: {
      getAllCountries,
      loadMoreCountries,
      getAllCountriesLoading,
      getCountriesByRegion,
      getCountriesByName,
      hasMoreCountries,
      countries,
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
    if (searchInputTouched) {
      const debounceTimerId = setTimeout(() => {
        if (region) return;

        if (searchValue === '' && !region) {
          getAllCountries();
        } else {
          getCountriesByName(searchValue);
        }
      }, 1500);

      return () => {
        clearTimeout(debounceTimerId);
      };
    }
  }, [searchValue]);

  const onRegionChangeHandler = (e: SelectChangeEvent<typeof region>) => {
    setSearchValue('');

    const regionValue = e.target.value;
    setRegion(regionValue);
    getCountriesByRegion(regionValue);
  };

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegion('');
    if (!searchInputTouched) {
      setSearchInputTouched(true);
    }
    setSearchValue(e.target.value.trim());
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
        <SearchInput value={searchValue} onChange={onSearchInputChange} />
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
