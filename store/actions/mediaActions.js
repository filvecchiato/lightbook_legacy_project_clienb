import * as actionTypes from './actionTypes';
import imageService from './../../services/ImageService';

export const getExploreImagesStart = () => {
  return {
    type: actionTypes.GET_EXPLORE_IMAGES_START,
    payload: null,
  };
};

export const getExploreImagesSuccess = (data) => {
  return {
    type: actionTypes.GET_EXPLORE_IMAGES_SUCCESS,
    payload: data,
  };
};

export const getExploreImagesFail = (error) => {
  return {
    type: actionTypes.GET_EXPLORE_IMAGES_FAIL,
    payload: error,
  };
};

export const getExploreImages = () => {
  return (dispatch) => {
    dispatch(getExploreImagesStart());
    imageService
      .getExploreImages()
      .then((response) => {
        dispatch(getExploreImagesSuccess(response));
      })
      .catch((error) => {
        console.log('get explore image redux error', error);
        dispatch(getExploreImagesFail(error));
      });
  };
};

export const getUserImagesStart = () => {
  return {
    type: actionTypes.GET_USER_IMAGES_START,
  };
};

export const getUserImagesSuccess = (data) => {
  return {
    type: actionTypes.GET_USER_IMAGES_SUCCESS,
    payload: data,
  };
};

export const getUserImagesFail = (error) => {
  return {
    type: actionTypes.GET_USER_IMAGES_FAIL,
    payload: error,
  };
};

export const getUserImages = (userId) => {
  return (dispatch) => {
    dispatch(getUserImagesStart());
    imageService
      .getUserImages(userId)
      .then((response) => {
        dispatch(getUserImagesSuccess(response.data));
      })
      .catch((error) => {
        console.log('get user image redux error', error);
        dispatch(getUserImagesFail(error));
      });
  };
};

const uploadStart = () => {
  return {
    type: actionTypes.UPLOAD_START,
  };
};

const uploadSuccess = () => {
  return {
    type: actionTypes.UPLOAD_SUCCESS,
  };
};

const uploadFail = (error) => {
  return {
    type: actionTypes.UPLOAD_FAIL,
    payload: error,
  };
};

export const uploadImage = (file, user_id) => {
  const image = JSON.stringify(file);
  return (dispatch) => {
    dispatch(uploadStart());
    imageService
      .uploadImage(image, user_id)
      .then((response) => {
        dispatch(uploadSuccess());
      })
      .catch((error) => {
        dispatch(uploadFail(error));
      });
  };
};
