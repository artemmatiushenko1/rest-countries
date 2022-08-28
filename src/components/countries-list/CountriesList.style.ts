import { styled } from '@mui/system';

export const Grid = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  rowGap: '75px',
  columnGap: '73px',
  paddingTop: '47px',
  paddingBottom: '40px',
}));
