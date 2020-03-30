import { FETCH_PALETTES, CREATE_PALETTE } from './../actions/types';

const INITIAL_STATE = {
  palettes: []
};

const paletteReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PALETTES:
      return { ...state, palettes: payload };
    case CREATE_PALETTE:
    default:
      return state;
  }
};

export default paletteReducer;
