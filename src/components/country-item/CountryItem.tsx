import React from 'react';
import * as S from './CountryItem.style';

interface CountryItemProps {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
}

const CountryItem: React.FC<CountryItemProps> = ({
  name,
  flag,
  population,
  region,
  capital,
}) => {
  return (
    <S.Card>
      <S.FlagWrapper>
        <S.FlagImg src={flag} alt="" />
      </S.FlagWrapper>
      <S.Details>
        <S.Name title={name}>{name}</S.Name>
        <S.PropertiesList>
          <S.Property>
            <p>
              Population: <span>{population}</span>
            </p>
          </S.Property>
          <S.Property>
            <p>
              Region: <span>{region}</span>
            </p>
          </S.Property>
          <S.Property>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </S.Property>
        </S.PropertiesList>
      </S.Details>
    </S.Card>
  );
};

export default CountryItem;
