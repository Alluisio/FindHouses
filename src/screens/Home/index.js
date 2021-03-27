import React, { useEffect } from 'react';
import { ScreenContainer, TopContainer, TitleContainer } from './styles';
import { Title, IconButton, Input, HouseCard } from '../../components';
import { getHousesCall } from '../../services/calls';

export const HomeScreen = () => {
  const callGetHouses = async () => {
    const result = await getHousesCall();
    console.log({ result });
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Encontre aqui seu imóvel</Title>
        </TitleContainer>
        <IconButton iconName="filter" />
      </TopContainer>

      <Input label="Localização" placeholder="Digite o endereço" />
      <HouseCard imgSource="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80" />
    </ScreenContainer>
  );
};
