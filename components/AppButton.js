import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title, colorButton }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles(colorButton).appButtonContainer}
  >
    <Text style={styles(colorButton).appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = (color) =>
  StyleSheet.create({
    screenContainer: {
      justifyContent: 'center',
    },
    appButtonContainer: {
      borderRadius: 10,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: color,
      margin: 20,
      padding: 10,
      backgroundColor: 'transparent',
    },
    appButtonText: {
      fontSize: 24,
      color: color,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
  });

export default AppButton;
