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
  (collections) => collections[collectionUrlParam],
);

export default selectCollections;
