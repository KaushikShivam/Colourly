import axios from 'axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

import { setAlert } from './alert';

import setAuthToken from './../../utils/setAuthToken';

// Load user
export const loadUser = () => async dispatch => {
  if (localStorage.jwt) {
    setAuthToken(localStorage.jwt);
  }

  try {
    const res = await axios.get('/api/v1/users/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data.data.user
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const registerUser = body => async dispatch => {
  try {
    const res = await axios.post('/api/v1/users/signup', body);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const loginUser = body => async dispatch => {
  try {
    const res = await axios.post('/api/v1/users/login', body);
    console.log(res);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    dispatch(loadUser());
  } catch (err) {
    console.log('hahahaha', err);
    dispatch(setAlert(err.response.data.message, 'error'));
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear profile
export const logout = dispatch => ({
  type: LOGOUT
});
