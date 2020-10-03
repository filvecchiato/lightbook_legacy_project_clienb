import React from 'react';
import Explore from '../screens/Explore';
// import Curate from './Curate';
import Upload from '../screens/Upload';
import UserGallery from '../screens/UserGallery';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';
import authenticationService from '../services/authenticationService';

const Drawer = createDrawerNavigator();

const isAuthenticated = authenticationService.currentUserValue;

const DrawerNavigator = () => {
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

      {isAuthenticated ?
      <>
        <Drawer.Screen name="User Photos" component={UserGallery} />
        <Drawer.Screen name="Explore" component={Explore} />
        {/* <Drawer.Screen name="Curate" component={Curate} /> */}
        <Drawer.Screen name="Upload" component={Upload} />
    // add logout logic
//         <Drawer.Screen name="Logout" component={Login} />
    
      </>
      : <Drawer.Screen name="Login" component={Login} />
      };
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
