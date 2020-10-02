/* eslint-disable react/prop-types */
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
import * as ScreenOrientation from 'expo-screen-orientation';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const UserGallery = (props) => {
  const [, forceUpdate] = React.useState();

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
    );
  }

  useFocusEffect(
    React.useCallback(() => {
      forceUpdate((s) => !s);
      changeScreenOrientation();
      props.getImages();
    }, []),
  );
  return (
    <View>
      <StatusBar hidden />
      <FlatList
        data={props.images}
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

const mapStateToProps = (state) => {
  return {
    userImages: state.main.userImages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: (userId) => dispatch(actions.getUserImages(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserGallery);
