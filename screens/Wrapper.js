import React from 'react';
import Explore from './Explore';
import Curate from './Curate';
import Upload from './Upload';
import UserGallery from './UserGallery';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
      <Drawer.Screen name="Gallery" component={UserGallery} />
      <Drawer.Screen name="Explore" component={Explore} />
      <Drawer.Screen name="Curate" component={Curate} />
      <Drawer.Screen name="Upload" component={Upload} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
