import React, { useEffect } from 'react';
import {
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_UP,
  );
}

const Welcome = ({ navigation }) => {
  const bkgrndImage = {
    uri:
      'https://images.unsplash.com/photo-1567581807005-1a3609c32d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  };

  useEffect(() => {
    changeScreenOrientation();
  });

  return (
    <ImageBackground style={s.background} source={bkgrndImage}>
      <SafeAreaView style={s.safeArea}>
        <View style={s.wrapper}>
          <View style={s.header}>
            <Image
              source={require('../assets/camera.png')}
              style={{
                padding: 30,
                width: '20%',
                height: '20%',
              }}
            />
            <Text style={s.bigTitle}>light_box</Text>
          </View>

          <View style={s.spacer} />

          <View style={s.controls}>
            <TouchableOpacity
              style={s.button}
              onPress={() => navigation.navigate('Wrapper')}
            >
              <Text style={s.title}>log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const s = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    padding: 25,
  },
  header: {
    paddingTop: 150,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Avenir-Heavy',
    color: 'lightgray',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Cochin',
    color: 'lightgray',
  },
  bigTitle: {
    textAlign: 'center',
    fontSize: 60,
    fontFamily: 'Avenir-Light',
    color: 'white',
  },
  spacer: {
    height: 400,
  },
  controls: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#333333',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    opacity: 0.7,
    flex: 1,
  },
  gap: {
    width: 25,
  },
});

export default Welcome;
