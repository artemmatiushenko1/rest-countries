import { Box } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Property } from 'components/property';
import * as S from './CountryPage.style';
import { CountryLink } from 'components/country-link';
import { useNavigate, useParams } from 'react-router-dom';
import { useStores } from 'hooks/use-stores';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
// import { Loader } from 'components/loader';
import { ICountry } from 'interfaces/country';
import CountryPagePlaceholder from './CountryPagePlaceholder';

const CountryPage = () => {
  const navigate = useNavigate();
  const {
    countriesStore: { getCountry, getCountryLoading },
  } = useStores();
  const { countryCode } = useParams<{ countryCode: string }>() as {
    countryCode: string;
  };
  const [country, setCountry] = useState<ICountry>();

  useEffect(() => {
    getCountry(countryCode).then((data) => {
      setCountry(data);
    });
  }, [getCountry, countryCode]);

  const onBackButtonClickHandler = () => {
    navigate(-1);
  };

  // if (getCountryLoading || !country) return <Loader />;

  return (
    <Box sx={{ paddingTop: '80px' }}>
      <S.BackButton
        variant="contained"
        startIcon={<KeyboardBackspaceIcon />}
        onClick={onBackButtonClickHandler}
      >
        Back
      </S.BackButton>
      {(getCountryLoading || !country) && <CountryPagePlaceholder />}
      {!getCountryLoading && country && (
        <S.CountryContainer>
          <S.FlagWrapper>
            <img src={country?.flags.svg} alt="" />
          </S.FlagWrapper>
          <S.Details>
            <S.Name>{country?.name}</S.Name>
            <S.PropertiesWrapper>
              <S.List>
                <S.Item>
                  <Property name="Native name" value={country?.nativeName!} />
                </S.Item>
                <S.Item>
                  <Property name="Population" value={country?.population!} />
                </S.Item>
                <S.Item>
                  <Property name="Region" value={country?.region!} />
                </S.Item>
                <S.Item>
                  <Property name="Sub Region" value={country?.subregion!} />
                </S.Item>
                <S.Item>
                  <Property name="Capital" value={country?.capital!} />
                </S.Item>
              </S.List>
              <S.List>
                <S.Item>
                  <Property
                    name="Top Level Domain"
                    value={country?.topLevelDomain?.join(', ')!}
                  />
                </S.Item>
                <S.Item>
                  <Property
                    name="Currencies"
                    value={
                      country?.currencies
                        ?.map((value) => value.name)
                        .join(', ')!
                    }
                  />
                </S.Item>
                <S.Item>
                  <Property
                    name="Languages"
                    value={
                      country?.languages?.map((value) => value.name).join(', ')!
                    }
                  />
                </S.Item>
              </S.List>
            </S.PropertiesWrapper>
            <S.NeighborCountries>
              <p>Border Countries:</p>
              <div>
                {country?.borders?.map((border) => (
                  <CountryLink key={border} to={`/country/${border}`}>
                    {border}
                  </CountryLink>
                ))}
              </div>
            </S.NeighborCountries>
          </S.Details>
        </S.CountryContainer>
      )}
    </Box>
  );
};

export default observer(CountryPage);
