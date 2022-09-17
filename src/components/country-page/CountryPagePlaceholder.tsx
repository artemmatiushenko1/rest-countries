import { Skeleton, Box } from '@mui/material';
import * as S from './CountryPage.style';

const CountryPagePlaceholder = () => {
  return (
    <S.CountryContainer>
      <Box
        sx={{
          maxWidth: '560px',
          width: '100%',
          height: 400,
          '@media (max-width: 600px)': {
            height: 300,
          },
        }}
      >
        <Skeleton
          sx={{ width: '100%' }}
          height="100%"
          animation="wave"
          component={'div'}
        />
      </Box>
      <S.Details sx={{ marginTop: '40px' }}>
        <Skeleton
          sx={{ mb: '35px' }}
          variant="text"
          animation="wave"
          component={'h2'}
        />
        <S.PropertiesWrapper
          sx={{
            columnGap: '80px',
          }}
        >
          <Box
            sx={{
              flex: 1,
              '& :not(:last-child)': {
                marginBottom: '7px',
              },
            }}
          >
            <Skeleton
              component={'div'}
              animation="wave"
              sx={{ width: '100%' }}
            />
            <Skeleton
              component={'div'}
              animation="wave"
              sx={{ width: '100%' }}
            />
            <Skeleton
              component={'div'}
              animation="wave"
              sx={{ width: '100%' }}
            />
            <Skeleton
              component={'div'}
              animation="wave"
              sx={{ width: '100%' }}
            />
            <Skeleton
              component={'div'}
              animation="wave"
              sx={{ width: '100%' }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              '& :not(:last-child)': {
                marginBottom: '7px',
              },
            }}
          >
            <Skeleton
              component={'div'}
              animation="wave"
              sx={{ width: '100%' }}
            />
            <Skeleton
              component={'div'}
              animation="wave"
              sx={{ width: '100%' }}
            />
            <Skeleton
              component={'div'}
              animation="wave"
              sx={{ width: '100%' }}
            />
          </Box>
        </S.PropertiesWrapper>
        <S.NeighborCountries>
          <Skeleton
            component={'div'}
            animation="wave"
            sx={{ width: '100%', height: '50px' }}
          />
        </S.NeighborCountries>
      </S.Details>
    </S.CountryContainer>
  );
};

export default CountryPagePlaceholder;
