import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SplashScreen } from './screens';
import { theme } from './styles/theme';
import StoreBook from '../storybook';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoreBook />
    </ThemeProvider>
  );
};

export default App;
