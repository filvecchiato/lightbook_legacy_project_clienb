import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Explore from './Explore';
// import Curate from './Curate';
import Upload from './Upload';
import UserGallery from './UserGallery';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import Logout from './Logout';
import RegisterUser from './Register';
import { connect } from 'react-redux';

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontColor: 'red',
          },
        }}
      >
        {props.isAuthenticated ? (
          <>
            <Drawer.Screen name="Explore" component={Explore} />
            <Drawer.Screen name="User Photos" component={UserGallery} />
            <Drawer.Screen name="Upload" component={Upload} />
            <Drawer.Screen name="Logout" component={Logout} />
          </>
        ) : (
          <>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={RegisterUser} />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const mapState = (state) => {
  return {
    isAuthenticated: !!state.general.user.token,
  };
};

const mapDistpatch = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.userLogout()),
  };
};

export default connect(mapState, mapDistpatch)(DrawerNavigator);
