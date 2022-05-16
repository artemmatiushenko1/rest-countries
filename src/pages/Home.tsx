import React from 'react';
import SearchInput from 'components/search-input/SearchInput';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ paddingTop: '50px' }}>
      <div className="toolbar">
        <SearchInput value="" onChange={() => {}} />
      </div>
    </Box>
  );
};

export default Home;
