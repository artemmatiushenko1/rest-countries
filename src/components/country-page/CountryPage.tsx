import { Box } from '@mui/material';
import { ICountry } from 'interfaces/country';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Property from 'components/property/Property';
import * as S from './CountryPage.style';
import CountryLink from 'components/country-link/CountryLink';

const country = {
  name: 'Afghanistan',
  topLevelDomain: ['.af'],
  alpha2Code: 'AF',
  alpha3Code: 'AFG',
  callingCodes: ['93'],
  capital: 'Kabul',
  altSpellings: ['AF', 'Afġānistān'],
  subregion: 'Southern Asia',
  region: 'Asia',
  population: 40218234,
  latlng: [33, 65],
  demonym: 'Afghan',
  area: 652230,
  timezones: ['UTC+04:30'],
  borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
  nativeName: 'افغانستان',
  numericCode: '004',
  flags: {
    svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
  },
  currencies: [
    {
      code: 'AFN',
      name: 'Afghan afghani',
      symbol: '؋',
    },
  ],
  languages: [
    {
      iso639_1: 'ps',
      iso639_2: 'pus',
      name: 'Pashto',
      nativeName: 'پښتو',
    },
    {
      iso639_1: 'uz',
      iso639_2: 'uzb',
      name: 'Uzbek',
      nativeName: 'Oʻzbek',
    },
    {
      iso639_1: 'tk',
      iso639_2: 'tuk',
      name: 'Turkmen',
      nativeName: 'Türkmen',
    },
  ],
  translations: {
    br: 'Afeganistão',
    pt: 'Afeganistão',
    nl: 'Afghanistan',
    hr: 'Afganistan',
    fa: 'افغانستان',
    de: 'Afghanistan',
    es: 'Afganistán',
    fr: 'Afghanistan',
    ja: 'アフガニスタン',
    it: 'Afghanistan',
    hu: 'Afganisztán',
  },
  flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
  regionalBlocs: [
    {
      acronym: 'SAARC',
      name: 'South Asian Association for Regional Cooperation',
    },
  ],
  cioc: 'AFG',
  independent: true,
} as ICountry;

const CountryPage = () => {
  return (
    <Box sx={{ paddingTop: '80px' }}>
      <S.BackButton variant="contained" startIcon={<KeyboardBackspaceIcon />}>
        Back
      </S.BackButton>
      <S.CountryContainer>
        <S.FlagWrapper>
          <img src={country.flags.svg} alt="" />
        </S.FlagWrapper>
        <S.Details>
          <S.Name>{country.name}</S.Name>
          <S.PropertiesWrapper>
            <S.List>
              <S.Item>
                <Property name="Native name" value={country.nativeName} />
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
                <Property name="Capital" value={country.capital} />
              </S.Item>
            </S.List>
            <S.List>
              <S.Item>
                <Property
                  name="Top Level Domain"
                  value={country.topLevelDomain.join(', ')}
                />
              </S.Item>
              <S.Item>
                <Property
                  name="Currencies"
                  value={country.currencies.join(', ')}
                />
              </S.Item>
              <S.Item>
                <Property
                  name="Languages"
                  value={country.languages.join(', ')}
                />
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
