import React from 'react';

import { CardTitle, CardDescription, CardHighLightText } from '../../atoms';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource, title, description, price }) => {
  const formattedPrice = value => {
    if (value != null) {
      const formatted =
        '$ ' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

      return formatted;
    } else {
      return 0;
    }
  };

  return (
    <CardContainer>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHighLightText>{formattedPrice(price)}</CardHighLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
