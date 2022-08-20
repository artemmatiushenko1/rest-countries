import Property from 'components/property/Property';
import { IFlags } from 'interfaces/country';
import React from 'react';
import * as S from './CountryItem.style';

interface CountryItemProps {
  name: string;
  flags: IFlags;
  population: number;
  region: string;
  capital: string;
  to: string;
}

const CountryItem: React.FC<CountryItemProps> = ({
  name,
  flags,
  population,
  region,
  capital,
  to,
}) => {
  return (
    <S.Card>
      <S.Link to={to} style={{ textDecoration: 'none' }}>
        <S.FlagWrapper>
          <S.FlagImg src={flags.svg} alt="" />
        </S.FlagWrapper>
        <S.Details>
          <S.Name title={name}>{name}</S.Name>
          <S.List>
            <S.Item>
              <Property
                name="Population"
                value={new Intl.NumberFormat().format(population)}
              />
            </S.Item>
            <S.Item>
              <Property name="Region" value={region} />
            </S.Item>
            <S.Item>
              <Property name="Capital" value={capital} />
            </S.Item>
          </S.List>
        </S.Details>
      </S.Link>
    </S.Card>
  );
};

export default CountryItem;
