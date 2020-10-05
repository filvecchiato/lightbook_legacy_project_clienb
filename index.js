import React, { useEffect } from 'react';
import Wrapper from './components/Wrapper';
import authenticationService from './services/authenticationService';
import Explore from './screens/Explore';
import UserGallery from './screens/UserGallery';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Upload from './screens/Upload';
import LoginPage from './screens/Login';
import Logout from './screens/Logout';
import { connect } from 'react-redux';

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {props.isAuthenticated ? (
          <>
            <Stack.Screen name="User Photos" component={UserGallery} />
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="Upload" component={Upload} />
            <Stack.Screen name="Logout" component={Logout} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginPage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//if no user, create. if logged out, show login. else:
const mapState = (state) => {
  return {
    isAuthenticated: !!state.general.user.token,
  };
};

export default connect(mapState)(App);
