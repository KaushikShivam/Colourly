import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import palette from './palette';

const rootReducer = combineReducers({
  alert,
  auth,
  palette
});

export default rootReducer;
