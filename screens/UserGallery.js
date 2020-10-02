import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import UserImage from '../components/UserImage';
import ImageService from '../services/ImageService';
import * as ScreenOrientation from 'expo-screen-orientation';

const UserGallery = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [, forceUpdate] = React.useState();

  const getAllImages = ImageService.getUserImages;

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
    );
  }

  useFocusEffect(
    React.useCallback(() => {
      forceUpdate((s) => !s);
      changeScreenOrientation();
      getAllImages().then((data) => setImages(data));
    }, []),
  );
  return (
    <View>
      <StatusBar hidden />
      <FlatList
        data={images}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <UserImage image={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 20,
  },
});

export default UserGallery;
