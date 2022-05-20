import { styled } from '@mui/system';
import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material';

export const AppBar = styled(MuiAppBar)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 1px 10px -2px rgb(0, 0, 0, 0.05)',
  };
});

export const Toolbar = styled(MuiToolbar)(() => {
  return {
    justifyContent: 'space-between',
    '&.MuiToolbar-root': {
      padding: '0',
      minHeight: '80px',
    },
  };
});

export const Title = styled('h1')(() => {
  return {
    fontSize: '23.8px',
  };
});
