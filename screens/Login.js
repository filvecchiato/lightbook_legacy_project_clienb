import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native';
import Input from '../components/Input';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const image = {
  uri:
    'https://images.unsplash.com/photo-1559406041-c7d2b2e98690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
};
// not connected, mock up for login
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.text}>Login here</Text>
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
    alignItems: 'center',
    maxHeight: '10%',
    margin: 10,
    padding: 10,
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
