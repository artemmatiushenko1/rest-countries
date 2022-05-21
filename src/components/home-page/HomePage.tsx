import { ISelectOption } from 'interfaces/select-option';
import { ICountry } from 'interfaces/country';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from 'components/search-input/SearchInput';
import { Box, SelectChangeEvent } from '@mui/material';
import Select from 'components/select/Select';
import CountriesList from 'components/countries-list/CountriesList';

const selectOptions: ISelectOption[] = [
  { value: '1', displayText: 'Africa' },
  { value: '2', displayText: 'America' },
  { value: '3', displayText: 'Asia' },
  { value: '4', displayText: 'Europe' },
  { value: '5', displayText: 'Oceania' },
];

const HomePage = () => {
  const [region, setRegion] = useState('');
  const [allCountries, setAllCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get<ICountry[]>(
        process.env.REACT_APP_API_URL as string
      );
      const transformedData = response.data?.map((country: any) => {
        return {
          name: country.name.common,
          nativeName: country?.name.nativeName,
          population: country?.population,
          region: country?.region,
          subregion: country?.subregion,
          capital: country?.capital,
          flag: country?.flags.svg,
          altSpellings: country?.altSpellings,
          tld: country?.tld,
          currencies: country?.currencies,
          languages: country?.languages,
          borders: country?.borders,
        };
      });
      setAllCountries(transformedData);
    };
    fetchCountries();
  }, []);

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
      <CountriesList countries={allCountries} />
    </Box>
  );
};

export default HomePage;
