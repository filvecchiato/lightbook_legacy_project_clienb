import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './components/Wrapper';

const App = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

//if no user, create. if logged out, show login. else:

export default App;
