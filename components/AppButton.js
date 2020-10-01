import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'center',
  },
  appButtonContainer: {
    width: 60,
    height: 20,
    elevation: 8,
    borderRadius: 10,
    marginTop: 40,
    marginRight: 40,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default AppButton;
