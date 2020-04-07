
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; // useful debug middleware

import rootReducer from './root-reducer';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));// current we only one midware,
export const persistor = persistStore(store);
export default { store, persistor };
