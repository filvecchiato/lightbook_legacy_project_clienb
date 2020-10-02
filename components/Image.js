import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const UserImage = ({ image }) => {
  return <ImageBackground source={{ uri: image.url }} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1 * 1.7,
    resizeMode: 'cover',
  },
});

export default UserImage;
