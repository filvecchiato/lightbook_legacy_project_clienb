import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import AppButton from '../components/AppButton';
import Input from '../components/Input';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { useFocusEffect } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

const image = {
  uri:
    'https://images.unsplash.com/photo-1567581807005-1a3609c32d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
};
// not connected, mock up for login
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    props.onLogin({
      email: email.toLowerCase(),
      password: password.toLowerCase(),
    });
  };

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP,
    );
  }

  useFocusEffect(
    React.useCallback(() => {
      changeScreenOrientation();
    }, []),
  );

  return (
    <View>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.form}>
            <Input
              label="Email"
              value={email}
              type="email"
              setAction={setEmail}
              placeholder="Enter email..."
            />
            <Input
              label="Password"
              value={password}
              type="password"
              setAction={setPassword}
              placeholder="Enter password..."
            />
          </View>
          <View style={styles.actions}>
            <View>
              <AppButton
                colorButton="red"
                onPress={() => loginUser()}
                title="Sign In"
              />
            </View>
            <Text style={styles.text}> Or </Text>
            <View>
              <AppButton
                colorButton="white"
                onPress={() => props.navigation.navigate('Register')}
                title="Register"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    margin: 10,
    padding: 10,
  },
  form: {
    width: '100%',
    height: '70%',
    paddingTop: 200,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#eaeaea',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  actions: {
    width: '90%',
    height: '20%',
    marginBottom: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.general.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data) => dispatch(actions.loginUser(data)),
    onCreateUser: (data) => dispatch(actions.createUser(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
