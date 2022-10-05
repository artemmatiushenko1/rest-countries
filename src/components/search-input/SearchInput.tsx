import React, { FC, ChangeEvent } from 'react';
import * as S from './SearchInput.style';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

type IInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<IInputProps> = ({ onChange, value }) => {
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
      sx={{
        '@media (max-width: 600px)': {
          maxWidth: 'initial',
        },
      }}
    />
  );
};

export default SearchInput;
