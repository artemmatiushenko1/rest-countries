import { Box } from '@mui/material';
import { ICountry } from 'interfaces/country';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Property from 'components/property/Property';
import * as S from './CountryPage.style';
import CountryLink from 'components/country-link/CountryLink';

const country: ICountry = {
  name: 'Ukraine',
  nativeName: {
    ukr: {
      official: 'Україна',
      common: 'Україна',
    },
  },
  population: 44134693,
  region: 'Europe',
  subregion: 'Eastern Europe',
  capital: ['Kyiv'],
  flag: 'https://flagcdn.com/ua.svg',
  altSpellings: ['UA', 'Ukrayina'],
  tld: ['.ua', '.укр'],
  currencies: {
    UAH: {
      name: 'Ukrainian hryvnia',
      symbol: '₴',
    },
  },
  languages: {
    ukr: 'Ukrainian',
  },
  borders: ['BLR', 'HUN', 'MDA', 'POL', 'ROU', 'RUS', 'SVK'],
};

const CountryPage = () => {
  return (
    <Box sx={{ paddingTop: '80px' }}>
      <S.BackButton variant="contained" startIcon={<KeyboardBackspaceIcon />}>
        Back
      </S.BackButton>
      <S.CountryContainer>
        <S.FlagWrapper>
          <img src={country.flag} alt="" />
        </S.FlagWrapper>
        <S.Details>
          <S.Name>{country.name}</S.Name>
          <S.PropertiesWrapper>
            <S.List>
              <S.Item>
                <Property
                  name="Native name"
                  value={country.nativeName.ukr.official}
                />
              </S.Item>
              <S.Item>
                <Property name="Population" value={country.population} />
              </S.Item>
              <S.Item>
                <Property name="Region" value={country.region} />
              </S.Item>
              <S.Item>
                <Property name="Subregion" value={country.subregion} />
              </S.Item>
              <S.Item>
                <Property name="Capital" value={country.capital.join(', ')} />
              </S.Item>
            </S.List>
            <S.List>
              <S.Item>
                <Property
                  name="Top Level Domain"
                  value={country.tld.join(', ')}
                />
              </S.Item>
              <S.Item>
                <Property
                  name="Currencies"
                  value={country.currencies.UAH.name}
                />
              </S.Item>
              <S.Item>
                <Property name="Languages" value={country.languages.ukr} />
              </S.Item>
            </S.List>
          </S.PropertiesWrapper>
          <S.NeighborCountries>
            <p>Border Countries:</p>
            <div>
              {country.borders.map((border) => (
                <CountryLink key={border} to="/">
                  {border}
                </CountryLink>
              ))}
            </div>
          </S.NeighborCountries>
        </S.Details>
      </S.CountryContainer>
    </Box>
  );
};

export default CountryPage;
