import React from 'react';
import Wrapper from './screens/Wrapper';
import Welcome from './screens/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Wrapper" component={Wrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//if no user, create. if logged out, show login. else:

export default App;
