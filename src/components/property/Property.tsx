import React, { FC } from 'react';
import * as S from './Property.style';

interface PropertyProps {
  name: string;
  value: string | number;
}

const Property: FC<PropertyProps> = ({ name, value }) => {
  return (
    <S.Paragraph>
      {name}: <span>{value}</span>
    </S.Paragraph>
  );
};

export default Property;
