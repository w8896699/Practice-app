import { all, call } from 'redux-saga/effects';
import { fetchCollectionStart } from './shop/shop.saga';
import { userSagas } from './user/user.sagas';

function* rootSagas() {
  yield all([call(fetchCollectionStart), call(userSagas)]);
}
export default rootSagas;
