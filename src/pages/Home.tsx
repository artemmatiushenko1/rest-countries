import { useEffect, useState } from 'react';
import SearchInput from 'components/search-input/SearchInput';
import { Box, SelectChangeEvent } from '@mui/material';
import Select from 'components/select/Select';
import { ISelectOption } from 'interfaces/select-option';
import { ICountry } from 'interfaces/country';
import axios from 'axios';
import CountriesList from 'components/countries-list/CountriesList';

const selectOptions: ISelectOption[] = [
  { value: '1', displayText: 'Africa' },
  { value: '2', displayText: 'America' },
  { value: '3', displayText: 'Asia' },
  { value: '4', displayText: 'Europe' },
  { value: '5', displayText: 'Oceania' },
];

const transformCountriesData = (countries: any[]) => {
  return countries?.map<ICountry>((country: any) => {
    return {
      name: country?.name.common,
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
};

const Home = () => {
  const [region, setRegion] = useState('');
  const [allCountries, setAllCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get<ICountry[]>(
        'https://restcountries.com/v3.1/all'
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
      console.log(transformedData[0]!.borders);
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

export default Home;
