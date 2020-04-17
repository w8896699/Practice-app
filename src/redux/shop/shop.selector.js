import { createSelector } from 'reselect';


const selectShop = (state) => state.shop;


export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.keys(collections).map((key) => collections[key]) : []),
);


// in here this function will return a function that create selector

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectCollections],
  (collections) => (collections ? collections[collectionUrlParam] : []),
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching,
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections,
);

export default selectCollections;
