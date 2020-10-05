import React from 'react';
import { Text, StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
  return (
    <>
      <Text style={styles.text}>{props.label}:</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.setAction}
        placeholder={props.placeholder}
        type={props.type}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 15,
    marginBottom: 20,
    borderRadius: 3,
  },
  text: {
    fontSize: 25,
    paddingBottom: 5,
    color: 'white',
  },
});

export default Input;
