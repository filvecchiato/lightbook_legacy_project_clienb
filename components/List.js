import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Nav from './Nav';

const List = () => {
  return (
    <View>
      <Text style={{ color: 'white' }}> Curated feed photos</Text>
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({});

export default List;
