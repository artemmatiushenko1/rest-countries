import { styled } from '@mui/system';
import { Button as MuiButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Button = styled(MuiButton)(({ theme }) => ({
  maxWidth: '96px',
  width: '100%',
  textTransform: 'none',
  backgroundColor: theme.palette.secondary.main,
  boxShadow: '0px 1px 10px -2px rgb(0, 0, 0, 0.2)',
}));

export const Link = styled(RouterLink)(() => ({
  textDecoration: 'none',
}));
