import React from 'react';

import { CardTitle, CardDescription, CardHighLightText } from '../../atoms';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource }) => {
  return (
    <CardContainer>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>Casa à venda</CardTitle>
          <CardDescription>
            Rua Casemiso de Abreu, 1908 - CASA E, Rio de Janeiro
          </CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHighLightText>U$ 200,00</CardHighLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
