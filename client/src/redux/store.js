import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

const INITIAL_STATE = {};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(...middlewares)
);

export default store;
