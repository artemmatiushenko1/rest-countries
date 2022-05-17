import { styled } from '@mui/system';
import { InputBase } from '@mui/material';

export const StyledInputBase = styled(InputBase)(({ theme }) => {
  const { palette } = theme;

  return {
    backgroundColor: palette.secondary.main,
    maxWidth: '200px',
    width: '100%',
    borderRadius: '5px',
    boxShadow: '0px 2px 4px -2px rgb(0 0 0 / 5%)',
    fontSize: '14px',
    lineHeight: '22.94px',

    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none',
    },
    '.MuiSelect-icon': {
      color: palette.text.primary,
      transition: 'transform 0.2s',
    },
    '& .MuiInputBase-input': {
      padding: '16.5px 14px',
      paddingLeft: '20px',
    },
  };
});
