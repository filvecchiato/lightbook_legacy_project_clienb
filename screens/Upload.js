import React, { useState, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';

import UploadService from '../services/UploadService';
import { set } from 'react-native-reanimated';

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
      UploadService.openImagePickerAsync().then(navigation.navigate('Gallery'));
    }, []),
  );

  return <View></View>;
};

const styles = StyleSheet.create({});

export default Upload;
