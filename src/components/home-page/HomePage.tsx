import { ISelectOption } from 'interfaces/select-option';
import { useState, useEffect } from 'react';
import SearchInput from 'components/search-input/SearchInput';
import { Box, SelectChangeEvent } from '@mui/material';
import Select from 'components/select/Select';
import CountriesList from 'components/countries-list/CountriesList';
import { useStores } from 'hooks/use-stores';
import { observer } from 'mobx-react-lite';
import Loader from 'components/loader/Loader';

const selectOptions: ISelectOption[] = [
  { value: '1', displayText: 'Africa' },
  { value: '2', displayText: 'America' },
  { value: '3', displayText: 'Asia' },
  { value: '4', displayText: 'Europe' },
  { value: '5', displayText: 'Oceania' },
];

const HomePage = () => {
  const [region, setRegion] = useState('');
  const {
    countriesStore: {
      getAllCountries,
      countries: allCountries,
      getAllCountriesLoading,
    },
  } = useStores();

  useEffect(() => {
    if (allCountries.length === 0) {
      getAllCountries();
    }
  }, [getAllCountries, allCountries.length]);

  return (
    <Box sx={{ paddingTop: '49px' }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between' }}
        className="toolbar"
      >
        <SearchInput value="" onChange={() => {}} />
        <Select
          options={selectOptions}
          placeholder="Filter by Region"
          value={region}
          onChange={(e: SelectChangeEvent<typeof region>) => {
            setRegion(e.target.value);
          }}
        />
      </Box>
      {getAllCountriesLoading ? (
        <Loader />
      ) : (
        <CountriesList countries={allCountries} />
      )}
    </Box>
  );
};

export default observer(HomePage);
