import axios from 'axios';
import {
  FETCH_PALETTES,
  CREATE_PALETTE,
  FETCH_SINGLE_PALETTE,
  CLEAR_SINGLE_PALETTE,
  FETCH_MY_PALETTES
} from './types';

import { setAlert } from './alert';

export const fetchPalettes = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/palettes');

    dispatch({
      type: FETCH_PALETTES,
      payload: res.data.data.palettes
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const fetchSinglePalette = id => async dispatch => {
  dispatch({
    type: CLEAR_SINGLE_PALETTE
  });
  try {
    const res = await axios.get(`/api/v1/palettes/${id}`);

    dispatch({
      type: FETCH_SINGLE_PALETTE,
      payload: res.data.data.palette
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const createPalette = palette => async dispatch => {
  try {
    const res = await axios.post('/api/v1/palettes', palette);

    if (res.data.status === 'success') {
      dispatch({ type: CREATE_PALETTE });
      dispatch(setAlert('Palette created', 'success'));
      dispatch(fetchPalettes());
      return Promise.resolve();
    }
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
  }
};

// Fetch user palettes
export const fetchMyPalettes = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/users/me');
    dispatch({
      type: FETCH_MY_PALETTES,
      payload: res.data.data.user.palettes
    });
    console.log(res.data.data.user.palettes);
  } catch (err) {
    console.log('ERROR', err);
    dispatch(setAlert(err, 'error'));
  }
};
