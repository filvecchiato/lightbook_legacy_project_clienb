import React from 'react';
import Explore from '../screens/Explore';
// import Curate from './Curate';
import Upload from '../screens/Upload';
import UserGallery from '../screens/UserGallery';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

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
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="User Photos" component={UserGallery} />
      <Drawer.Screen name="Explore" component={Explore} />
      {/* <Drawer.Screen name="Curate" component={Curate} /> */}
      <Drawer.Screen name="Upload" component={Upload} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
