import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Image from '../components/Image';
import * as ScreenOrientation from 'expo-screen-orientation';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const UserGallery = (props) => {
  const { loading, error, userImages, getImages, userId, token } = props;

  const [, forceUpdate] = useState();

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
    );
  }

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      forceUpdate((s) => !s);
      changeScreenOrientation();
      getImages(userId, token);
      return () => {
        isActive = false;
      };
    }, []),
  );

  return (
    <View
      style={(styles.container, { height: window.height, width: window.width })}
    >
      <StatusBar hidden />
      {loading && !error ? (
        <Text style={styles.message}> Loading ... </Text>
      ) : null}
      {!loading && error ? <Text style={styles.message}> Error! </Text> : null}
      {!loading && !error && userImages.length ? (
        <FlatList
          data={userImages}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <Image image={item} />}
        />
      ) : null}
      {!loading && !error && !userImages.length ? (
        <Text style={styles.message}> No Photos found </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  message: {
    color: 'red',
    width: '90%',
    margin: 'auto',
  },
});

const mapStateToProps = (state) => {
  return {
    userImages: state.general.user.images,
    token: state.general.user.token,
    userId: state.general.user.user_id,
    loading: state.general.loading,
    error: state.general.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: (userId, token) =>
      dispatch(actions.getUserImages(userId, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserGallery);
