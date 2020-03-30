import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './../actions/types';

const INITIAL_STATE = {
  user: null,
  isAuthenticated: null,
  loading: true,
  token: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('jwt', payload);
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('jwt');
      return { ...state, token: null, isAuthenticated: false, loading: false };
    case USER_LOADED:
      return { ...state, isAuthenticated: true, loading: false, user: payload };
    default:
      return state;
  }
};

export default authReducer;
