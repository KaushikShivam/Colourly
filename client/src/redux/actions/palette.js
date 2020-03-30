import axios from 'axios';
import { FETCH_PALETTES, CREATE_PALETTE } from './types';

import { setAlert } from './alert';

export const fetchPalettes = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/palettes');

    dispatch({
      type: FETCH_PALETTES,
      payload: res.data.data.palettes
    });
    console.log(res.data.data.palettes);
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
