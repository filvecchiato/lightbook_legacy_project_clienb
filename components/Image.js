import React from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

const UserImage = ({ image }) => {
  return <ImageBackground source={{ uri: image.url }} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('screen').width - 10,
    width: Dimensions.get('screen').height,
    marginVertical: 5,
    resizeMode: 'cover',
  },
});

export default UserImage;
