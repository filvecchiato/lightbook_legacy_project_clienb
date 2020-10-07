import { act } from 'react-test-renderer';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
  user: {
    user_id: null,
    token: null,
    images: [],
  },
  exploreImages: [],
  loading: false,
  error: null,
};

const setIsLoading = (state) => {
  return updateObject(state, { loading: true });
};

const setError = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload,
  });
};

const getUserImagesSuccess = (state, action) => {
  const data = action.payload.map((image) => ({
    id: image.id,
    url: image.urls.regular,
  }));
  return updateObject(state, {
    loading: false,
    user: {
      user_id: state.user.user_id,
      token: state.user.token,
      images: data,
    },
  });
};

const getExploreImagesSuccess = (state, action) => {
  const data = action.payload.map((image) => ({
    id: image.id,
    url: image.urls.regular,
  }));

  return updateObject(state, {
    loading: false,
    exploreImages: data,
  });
};

const setLoggedIn = (state, action) => {
  return updateObject(state, {
    user: {
      user_id: action.payload.user_id,
      token: action.payload.token,
      images: state.user.images,
    },
    loading: false,
  });
};

const setLogOut = (state, action) => {
  return updateObject(state, {
    user: {
      user_id: null,
      token: null,
      images: [],
    },
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_IMAGES_START:
      return setIsLoading(state, action);
    case actionTypes.GET_USER_IMAGES_FAIL:
      return setError(state, action);
    case actionTypes.GET_USER_IMAGES_SUCCESS:
      return getUserImagesSuccess(state, action);
    case actionTypes.GET_EXPLORE_IMAGES_FAIL:
      return setError(state, action);
    case actionTypes.GET_EXPLORE_IMAGES_START:
      return setIsLoading(state, action);
    case actionTypes.GET_EXPLORE_IMAGES_SUCCESS:
      return getExploreImagesSuccess(state, action);
    case actionTypes.LOGIN_START:
      return setIsLoading(state, action);
    case actionTypes.LOGIN_FAIL:
      return setError(state, action);
    case actionTypes.LOGIN_SUCCESS:
      return setLoggedIn(state, action);
    case actionTypes.CREATE_USER_START:
      return setIsLoading(state, action);
    case actionTypes.CREATE_USER_FAIL:
      return setError(state, action);
    case actionTypes.CREATE_USER_SUCCESS:
      return setLoggedIn(state, action);
    case actionTypes.USER_LOGOUT:
      return setLogOut(state, action);
    default:
      return state;
  }
};

export default reducer;
