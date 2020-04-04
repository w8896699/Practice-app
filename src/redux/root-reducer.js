
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // tell redux we gonna use windows storage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persisttConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // the only reduce we want to persist
};

const rootRudece = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persisttConfig, rootRudece);
