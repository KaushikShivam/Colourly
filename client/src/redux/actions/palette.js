import axios from 'axios';
import { FETCH_PALETTES } from './types';

import { setAlert } from './alert';

export const fetchPalettes = async dispatch => {
  try {
    const res = await axios.get('/api/v1/palettes');

    console.log(res.data);
    dispatch({
      type: FETCH_PALETTES,
      payload: res.data
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
  }
};
