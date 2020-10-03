// import * as ImagePicker from 'expo-image-picker';
// import serviceConfig from './serviceConfig';

// let CLOUDINARY_URL = serviceConfig.cloudinaryUp;
// const uploadPreset = serviceConfig.cloudinaryPreset;

// export default {
//   openImagePickerAsync: async () => {
//     let pickerResult = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true,
//       aspect: [16, 9],
//       base64: true,
//     });

//     if (pickerResult.cancelled === true) {
//       return;
//     }

//     let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;

//     let data = {
//       file: base64Img,
//       upload_preset: uploadPreset,
//     };

//     fetch(CLOUDINARY_URL, {
//       body: JSON.stringify(data),
//       headers: {
//         'content-type': 'application/json',
//       },
//       method: 'POST',
//     }).catch((err) => console.log(err));
//   },
// };
