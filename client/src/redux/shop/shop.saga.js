import {
  takeLatest, call, put, all,
} from 'redux-saga/effects'; // listen every action of specialc type we prase in
import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/filrebase.util';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.actions';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections'); // 从firestore里把整个collection的ref拿出来,
    const Snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapShotToMap, Snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }


//  collectionRef
//     .get()
//     .then((Snapshot) => { // 这个是标准格式,上面那个是firebase提供的方法 m m m m
//       const collectionMap = convertCollectionsSnapShotToMap(Snapshot);
//       dispatch(fetchCollectionSuccess(collectionMap));
//     })
//     .catch((error) => dispatch(fetchCollectionFailure(error.Message)));
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync,
  );
}

export function* shopSagas() {
  yield (all([
    call(fetchCollectionStart),
  ]));
}
