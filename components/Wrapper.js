import React from 'react';
import Explore from '../screens/Explore';
// import Curate from './Curate';
import Upload from '../screens/Upload';
import UserGallery from '../screens/UserGallery';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';
import Logout from '../screens/Logout';

import { connect } from 'react-redux';

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  console.log(props.isAuthenticated);
  return (
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
          <Drawer.Screen name="User Photos" component={UserGallery} />
          <Drawer.Screen name="Explore" component={Explore} />
          <Drawer.Screen name="Upload" component={Upload} />
          <Drawer.Screen name="Logout" component={Logout} />
        </>
      ) : (
        <Drawer.Screen name="Login" component={Login} />
      )}
    </Drawer.Navigator>
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
