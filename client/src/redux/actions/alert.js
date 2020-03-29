import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (status, message) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: { status, message }
  });
  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT });
  }, 1000);
};
