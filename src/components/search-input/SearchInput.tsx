import React from 'react';
import * as S from './SearchInput.style';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, SxProps } from '@mui/material';

interface IInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps;
}

const SearchInput: React.FC<IInputProps> = ({ value, onChange, sx }) => {
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
      sx={sx}
    />
  );
};

export default SearchInput;
