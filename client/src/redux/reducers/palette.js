import {
  FETCH_PALETTES,
  FETCH_USER_PALETTES,
  FETCH_MY_PALETTES,
  CREATE_PALETTE,
  FETCH_SINGLE_PALETTE,
  CLEAR_SINGLE_PALETTE,
  DELETE_PALETTE
} from './../actions/types';

const INITIAL_STATE = {
  palettes: [],
  singlePalette: null
};

const paletteReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PALETTES:
      return { ...state, palettes: payload };
    case FETCH_MY_PALETTES:
    case FETCH_USER_PALETTES:
      return { ...state, palettes: payload };
    case FETCH_SINGLE_PALETTE:
      return { ...state, singlePalette: payload };
    case CLEAR_SINGLE_PALETTE:
      return { ...state, singlePalette: null };
    case DELETE_PALETTE:
      return {
        ...state,
        palettes: state.palettes.filter(palette => palette.id !== payload)
      };
    case CREATE_PALETTE:
    default:
      return state;
  }
};

export default paletteReducer;
