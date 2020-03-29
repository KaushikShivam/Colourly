import { SET_ALERT, REMOVE_ALERT } from './../actions/types';

const INITIAL_STATE = {};

const alertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return payload;
    case REMOVE_ALERT:
      return {};
    default:
      return state;
  }
};

export default alertReducer;
