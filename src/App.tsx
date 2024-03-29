import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor='#1a1a1a' />
        <Routes/>
    </NavigationContainer>
  );
};

export default App;