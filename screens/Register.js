import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native';
import Input from '../components/Input';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import AppButton from '../components/AppButton';

const image = {
  uri:
    'https://images.unsplash.com/photo-1559406041-c7d2b2e98690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
};

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordConfirm, setPasswordConfrim] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState(null);

  const registerUser = async () => {
    if (password === passwordConfirm) {
      const data = {
        username: username,
        name: name,
        email: email,
        password: password,
      };
      const resposnse = await props.onRegister(data);
      if (response) {
        props.navigation.navigate('Explore');
      }
    } else {
      setError('Passwords do not match!!');
    }
  };

  return (
    <View>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Input
            label="Name"
            value={name}
            type="test"
            setAction={setName}
            placeholder="Enter your name..."
          />
          <Input
            label="Username"
            value={username}
            type="text"
            setAction={setUsername}
            placeholder="Enter username..."
          />
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
            placeholder="Enter Password"
          />
          <Input
            label="Confirm Password"
            value={passwordConfirm}
            type="password"
            setAction={setPasswordConfrim}
            placeholder="Enter Password again"
          />
          {error ? <Text style={styles.error}> {error} </Text> : null}
        </View>
        <View>
          <AppButton
            colorButton="white"
            onPress={() => registerUser()}
            title="Register!"
          />
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
    height: '70%',
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (data) => dispatch(actions.createUser(data)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
