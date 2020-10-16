import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import rootReducer from "../reducers";

export const ConfigureStore = () => createStore(
  rootReducer,
  applyMiddleware(thunk, reduxImmutableStateInvariant(), logger),
);
