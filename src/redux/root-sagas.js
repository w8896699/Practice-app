import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shop.saga';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';


function* rootSagas() {
  yield all([call(shopSagas),
    call(userSagas),
    call(cartSagas),
  ]);
}
export default rootSagas;
