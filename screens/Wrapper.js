import React from 'react';
import Explore from './Explore';
// import Curate from './Curate';
import Upload from './Upload';
import UserGallery from './UserGallery';
import { createDrawerNavigator } from '@react-navigation/drawer';
import authenticationService from '../services/authenticationService';
import LoginPage from './Login';



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
      </>
      : <Drawer.Screen name="Login" component={LoginPage} />
      };

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
