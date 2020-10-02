import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';

import UploadService from '../services/UploadService';

const Upload = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      async () => {
        if (Platform.OS !== 'web') {
          const {
            status,
          } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
      UploadService.openImagePickerAsync().then(navigation.navigate('Explore'));
    }, []),
  );

  return <View></View>;
};

const styles = StyleSheet.create({});

export default Upload;
