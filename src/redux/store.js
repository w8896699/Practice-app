
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // useful debug middleware

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));// current we only one midware,

export default store;
