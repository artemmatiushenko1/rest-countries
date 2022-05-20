import { styled } from '@mui/system';

export const Card = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  maxWidth: '265px',
  width: '100%',
  borderRadius: '5px',
  overflow: 'hidden',
  boxShadow: '0px 1px 10px -2px rgb(0, 0, 0, 0.05)',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

export const FlagWrapper = styled('div')(() => ({
  maxWidth: '100%',
  width: '100%',
  height: '160px',
}));

export const FlagImg = styled('img')(() => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
}));

export const Name = styled('h2')(() => ({
  fontSize: '18px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

export const Details = styled('div')(() => ({
  padding: '24px 25px 42px 25px',
}));

export const PropertiesList = styled('ul')(() => {
  return {
    listStyle: 'none',
    paddingTop: '13px',
  };
});

export const Property = styled('li')(() => {
  return {
    fontSize: '14px',
    fontWeight: 600,
    span: {
      fontWeight: 400,
    },
    '&:not(:last-child)': {
      marginBottom: '3px',
    },
  };
});
