import { ISelectOption } from 'interfaces/select-option';
import { useState, useEffect } from 'react';
import SearchInput from 'components/search-input/SearchInput';
import { Box, SelectChangeEvent } from '@mui/material';
import Select from 'components/select/Select';
import CountriesList from 'components/countries-list/CountriesList';
import { useStores } from 'hooks/use-stores';
import { observer } from 'mobx-react-lite';
import Loader from 'components/loader/Loader';
import { useSearchParams } from 'react-router-dom';

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
  const {
    countriesStore: {
      countries,
      getAllCountries,
      getAllCountriesLoading,
      getCountriesByRegion,
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

  const onRegionChangeHandler = (e: SelectChangeEvent<typeof region>) => {
    const regionValue = e.target.value;
    setRegion(regionValue);
    setSearchParams({ region: regionValue });
    getCountriesByRegion(regionValue);
  };

  return (
    <Box sx={{ paddingTop: '49px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <SearchInput value="" onChange={() => {}} />
        <Select
          options={selectOptions}
          placeholder="Filter by Region"
          value={region}
          onChange={onRegionChangeHandler}
        />
      </Box>
      {getAllCountriesLoading ? (
        <Loader />
      ) : (
        <CountriesList countries={countries} />
      )}
    </Box>
  );
};

export default observer(HomePage);
