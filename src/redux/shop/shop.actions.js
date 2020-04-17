import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/filrebase.util';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,

});
export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});
export const fetchCollectionStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections'); // 从firestore里把整个collection的ref拿出来,
  console.log('get it out@!!');
  dispatch(fetchCollectionStart());
  // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (Snapshot) => {
  //   const collectionMap = convertCollectionsSnapShotToMap(Snapshot);
  //   updateCollections(collectionMap); // 这里是async, 需要等待的,接到信息了update到redux里头去
  //   this.setState({ loading: false });
  // }); //= > this means whenever collectionSnapshot got update, or run first time this will send collection data arry to us
  collectionRef
    .get()
    .then((Snapshot) => { // 这个是标准格式,上面那个是firebase提供的方法 m m m m
      const collectionMap = convertCollectionsSnapShotToMap(Snapshot);
      dispatch(fetchCollectionSuccess(collectionMap));
    })
    .catch((error) => dispatch(fetchCollectionFailure(error.Message)));
};

export default fetchCollectionStartAsync;
