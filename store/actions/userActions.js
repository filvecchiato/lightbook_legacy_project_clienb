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
    //insert api service post request here passing required user data
    dispatch(loginUserSuccess({ token: 'hello' }));
    return 'success';
    // authenticationService.login(data.email, data.password)
    // .then((response) => {
    //   dispatch(loginUserSuccess(response));
    // })
    // .catch((error) => dispatch(loginUserFail(error)));
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

export const createUser = () => {
  return (dispatch) => {
    dispatch(createUserStart());
    //insert api service post request here passing required user data
    () =>
      ({}
        .then((response) => {
          dispatch(createUserSuccess(response.data));
        })
        .catch((error) => dispatch(createUserFail(error))));
  };
};
