import React from 'react';
import * as S from './SearchInput.style';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

interface IInputProps {
  value: string;
  onChange: () => void;
}

const SearchInput: React.FC<IInputProps> = ({ value, onChange }) => {
  return (
    <S.Input
      type="text"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={onChange}
      variant="outlined"
      placeholder="Search for a country..."
    />
  );
};

export default SearchInput;
