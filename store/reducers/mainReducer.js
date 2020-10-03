import { act } from 'react-test-renderer';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
  user: {
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
      profile: null,
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
      token: action.payload,
      images: state.user.images,
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
      return setError(state, action.payload);
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
    default:
      return state;
  }
};

export default reducer;
