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
}));

export const Name = styled('h2')(() => ({
  fontSize: '30px',
}));

export const List = styled('ul')(() => {
  return {
    listStyle: 'none',
    paddingTop: '13px',
  };
});

export const Item = styled('li')(() => {
  return {
    fontSize: '16px',
    '&:not(:last-child)': {
      marginBottom: '3px',
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
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

export const PropertiesWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const NeighborCountries = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  marginTop: '85px',
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
}));
