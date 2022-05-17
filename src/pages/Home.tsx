import { useState } from 'react';
import SearchInput from 'components/search-input/SearchInput';
import { Box, SelectChangeEvent } from '@mui/material';
import Select from 'components/select/Select';
import { ISelectOption } from 'interfaces/select-option';

const Home = () => {
  const [region, setRegion] = useState('');
  const selectOptions: ISelectOption[] = [
    { value: '1', displayText: 'Africa' },
    { value: '2', displayText: 'America' },
    { value: '3', displayText: 'Asia' },
    { value: '4', displayText: 'Europe' },
    { value: '5', displayText: 'Oceania' },
  ];

  return (
    <Box sx={{ paddingTop: '50px' }}>
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
    </Box>
  );
};

export default Home;
