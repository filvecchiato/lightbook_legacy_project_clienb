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
    width: '50%',
    height: '70%',
    borderRadius: 3,
  },
  text: {
    fontSize: 30,
    color: 'lightgray',
  },
});

export default Input;
