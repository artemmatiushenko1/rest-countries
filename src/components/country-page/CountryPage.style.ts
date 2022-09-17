import { styled, Button } from '@mui/material';

export const BackButton = styled(Button)(({ theme }) => ({
  maxWidth: '135px',
  width: '100%',
  boxShadow: '0px 1px 10px -2px rgb(0, 0, 0, 0.2)',
  textTransform: 'none',
  fontSize: '16px',
  backgroundColor: theme.palette.secondary.main,
}));

export const Details = styled('div')(() => ({
  flex: '50%',
  alignSelf: 'flex-start',
  marginTop: '40px',
  width: '100%',
}));

export const Name = styled('h2')(() => ({
  fontSize: '30px',
  marginBottom: '25px',
}));

export const List = styled('ul')(() => {
  return {
    listStyle: 'none',
    '@media (max-width: 1140px)': {
      flex: 1,
    },
  };
});

export const Item = styled('li')(() => {
  return {
    fontSize: '16px',
    '&:not(:last-child)': {
      marginBottom: '8px',
    },
  };
});

export const FlagWrapper = styled('div')(() => ({
  maxWidth: '560px',
  width: '100%',

  img: {
    width: '100%',
  },
}));

export const CountryContainer = styled('div')(() => ({
  display: 'flex',
  marginTop: '80px',
  columnGap: '122px',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingBottom: '20px',
  '@media (max-width: 1140px)': {
    flexDirection: 'column',
    marginTop: '40px',
  },
}));

export const PropertiesWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  '&:first-child': {
    marginRight: '',
  },
  '@media (max-width: 1140px)': {
    justifyContent: 'flex-start',
    columnGap: '25vw',
  },
  '@media (max-width: 500px)': {
    flexDirection: 'column',
    rowGap: '20px',
  },
}));

export const NeighborCountries = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  marginTop: '75px',
  p: {
    marginRight: '10px',
    fontWeight: '600',
  },
  div: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  '@media (max-width: 1140px)': {
    marginTop: '40px',
  },
}));
