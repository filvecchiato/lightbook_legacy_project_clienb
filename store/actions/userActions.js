import * as actionTypes from './actionTypes';
import authenticationService from '../../services/authenticationService';

export const loginUserFail = (error) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    payload: error,
  };
};

export const loginUserStart = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

export const loginUserSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginUser = (data) => {
  return (dispatch) => {
    dispatch(loginUserStart());
    authenticationService
      .login({ email: data.email, password: data.password })
      .then((response) => {
        dispatch(
          loginUserSuccess({ token: response.token, user_id: response.id }),
        );
        return 'success';
      })
      .catch((error) => {
        dispatch(loginUserFail(error));
        return 'error';
      });
  };
};

export const userLogout = () => {
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

export const createUserStart = () => {
  return {
    type: actionTypes.CREATE_USER_START,
  };
};

export const createUserSuccess = (data) => {
  return {
    type: actionTypes.CREATE_USER_SUCCESS,
    payload: data,
  };
};

export const createUserFail = (error) => {
  return {
    type: actionTypes.CREATE_USER_FAIL,
    payload: error,
  };
};

export const createUser = (data) => {
  return (dispatch) => {
    dispatch(createUserStart());
    authenticationService
      .createUser(data)
      .then((response) => {
        dispatch(createUserSuccess(response.response));
        return response;
      })
      .catch((error) => {
        dispatch(createUserFail(error));
        return error;
      });
  };
};
