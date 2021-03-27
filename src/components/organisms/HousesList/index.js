import React from 'react';

import { HouseCard } from '../../molecules';
import { HouseListContainer } from './styles';

export const HousesList = ({ array }) => {
  return (
    <HouseListContainer
      data={array}
      renderItem={() => <HouseCard />}
      keyExtractor={item => item.property_id}
    />
  );
};
