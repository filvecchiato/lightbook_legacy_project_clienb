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

const image = {
  uri:
    'https://images.unsplash.com/photo-1559406041-c7d2b2e98690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
};

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pumpkins, setPumpkins] = useState('');
  const [website, setWebsite] = useState('');
  const [bio, setBio] = useState('');

  return (
    <View>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.text}>create new account</Text>
          <Text style={styles.text}>name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="name"
          />
          <Text style={styles.text}>username:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="username"
          />
          <Text style={styles.text}>email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="email"
          />
          <Text style={styles.text}>password:</Text>
          <TextInput
            style={styles.input}
            value={pumpkins}
            onChangeText={setPumpkins}
            secureTextEntry={true}
            placeholder="password"
          />
          <Text style={styles.text}>website:</Text>
          <TextInput
            style={styles.input}
            value={website}
            onChangeText={setWebsite}
            placeholder="website"
          />
          <Text style={styles.text}>bio:</Text>
          <TextInput
            style={styles.input}
            value={bio}
            onChangeText={setBio}
            placeholder="bio"
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
    margin: 10,
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '50%',
    height: '70%',
    borderRadius: 3,
  },
  text: {
    fontSize: 30,
    color: 'lightgray',
  },
});
export default Register;
