import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
  user: {
    profile: null,
    images: [],
  },
  media: {},
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
  return updateObject(state, {
    loading: false,
    user: {
      profile: null,
      images: action.payload,
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
    default:
      return state;
  }
};

export default reducer;
