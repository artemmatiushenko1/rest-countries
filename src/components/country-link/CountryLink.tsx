import React, { FC } from 'react';
import * as S from './CountryLink.style';

interface ButtonContainedProps {
  children: React.ReactNode;
  to: string;
}

const CountryLink: FC<ButtonContainedProps> = ({ children, to }) => {
  return (
    <S.Link to={to}>
      <S.Button variant="contained" size="small">
        {children}
      </S.Button>
    </S.Link>
  );
};

export default CountryLink;
