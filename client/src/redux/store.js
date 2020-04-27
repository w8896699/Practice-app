
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; // useful debug middleware
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSagas from './root-sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
console.log('check',process.env.NODE_ENV )
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));// current we only one midware,
sagaMiddleware.run(rootSagas);
export const persistor = persistStore(store);
export default { store, persistor };
