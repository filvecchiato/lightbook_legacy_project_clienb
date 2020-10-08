import React, { useState } from 'react';
import { View, StyleSheet, Platform, Button, Image, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import * as ImagePicker from 'expo-image-picker';

const Upload = (props) => {
  const [image, setImage] = useState(null);
  const [uplaoding, setUploading] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const {
            status,
          } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []),
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    setImage(result);
  };

  const uploadImage = async () => {
    const data = {
      file: 'data:image/jpeg;base64,' + image.base64,
      upload_preset: 'ycbrw0p9',
    };
    setUploading(true);
    props.onUpload(data, props.user_id, props.token);
    setTimeout(() => {
      setUploading(false);
      setImage(null);
      props.navigation.navigate('User Photos');
    }, 2000);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image ? null : (
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      )}
      {image && !uplaoding ? (
        <>
          <Image
            source={{ uri: image.uri }}
            style={{ width: 300, height: 300 }}
          />
          <View style={styles.actions}>
            <Button title="Upload" onPress={() => uploadImage()} />
            <Button title="Cancel" onPress={() => setImage(null)} />
          </View>
        </>
      ) : null}
      {uplaoding ? <Text> Uploading </Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    display: 'flex',
    flexDirection: 'row',
  },
});
const mapState = (state) => {
  return {
    user_id: state.general.user.user_id,
    token: state.general.user.token,
  };
};

const mapDispatch = (dispatch) => {
  return {
    onUpload: (file, user_id, token) =>
      dispatch(actions.uploadImage(file, user_id, token)),
  };
};

export default connect(mapState, mapDispatch)(Upload);
