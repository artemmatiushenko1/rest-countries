import { styled } from '@mui/system';
import { TextField as MuiTextField } from '@mui/material';

export const Input = styled(MuiTextField)(({ theme }) => {
  return {
    width: '100%',
    maxWidth: '480px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '5px',
    boxShadow: '0px 1px 10px -2px rgb(0, 0, 0, 0.05)',
    '& .MuiInputBase-root': {
      padding: '0 0 0 30px',
      '& .MuiInputAdornment-root': {
        marginRight: '20px',
        '& .MuiSvgIcon-root': {
          fill: theme.palette.text.primary,
        },
      },
    },
    '& .MuiInputBase-input': {
      padding: '18px 30px 18px 0px',
      fontFamily: 'inherit',
      fontSize: '14px',
      lineHeight: '22.94px',
      '&::placeholder': {
        color: theme.palette.text.primary,
        opacity: 1,
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none',
    },
  };
});
