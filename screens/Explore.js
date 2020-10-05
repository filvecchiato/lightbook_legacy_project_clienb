import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Image from '../components/Image';
import * as ScreenOrientation from 'expo-screen-orientation';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const Explore = (props) => {
  const { loading, error, images, getImages } = props;

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
    );
  }

  useFocusEffect(
    React.useCallback(() => {
      changeScreenOrientation();
      getImages();
    }, []),
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {loading && !error && <Text style={styles.message}> Loading ... </Text>}
      {!loading && error && <Text style={styles.message}> Error! {error}</Text>}
      {!loading && !error && !!images.length && (
        <FlatList
          data={images}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <Image image={item} />}
        />
      )}
      {!loading && !error && !images.length && (
        <Text style={styles.message}> No Photos found </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  message: {
    color: 'red',
    width: '90%',
    margin: 'auto',
  },
});

const mapStateToProps = (state) => {
  return {
    images: state.general.exploreImages || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: () => dispatch(actions.getExploreImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
