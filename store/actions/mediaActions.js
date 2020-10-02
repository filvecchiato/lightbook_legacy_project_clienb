import * as actionTypes from './actionTypes';
import imageService from './../../services/ImageService';

export const getExploreImagesStart = () => {
  return {
    action: actionTypes.GET_EXPLORE_IMAGES_START,
    payload: null,
  };
};

export const getExploreImagesSuccess = (data) => {
  return {
    action: actionTypes.GET_EXPLORE_IMAGES_SUCCESS,
    payload: data,
  };
};

export const getExploreImagesFail = (error) => {
  return {
    action: actionTypes.GET_EXPLORE_IMAGES_FAIL,
    payload: error,
  };
};

export const getExploreImages = () => {
  return (dispatch) => {
    dispatch(getExploreImagesStart());
    imageService
      .getExploreImages()
      .then((response) => {
        console.log('explore image redux', response);
        dispatch(getExploreImagesSuccess(response.data));
      })
      .catch((error) => {
        console.log('get explore image redux error', error);
        dispatch(getExploreImagesFail(error));
      });
  };
};

export const getUserImagesStart = () => {
  return {
    action: actionTypes.GET_USER_IMAGES_START,
    payload: null,
  };
};

export const getUserImagesSuccess = (data) => {
  return {
    action: actionTypes.GET_USER_IMAGES_SUCCESS,
    payload: data,
  };
};

export const getUserImagesFail = (error) => {
  return {
    action: actionTypes.GET_USER_IMAGES_FAIL,
    payload: error,
  };
};

export const getUserImages = (userId) => {
  return (dispatch) => {
    dispatch(getUserImagesStart());
    imageService
      .getUserImages(userId)
      .then((response) => {
        console.log('get user image redux', response);
        dispatch(getUserImagesSuccess(response.data));
      })
      .catch((error) => {
        console.log('get user image redux error', error);
        dispatch(getUserImagesFail(error));
      });
  };
};
