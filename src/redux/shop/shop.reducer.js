
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errMsg: undefined,
};


const shopReducer = (state = INITIAL_STATE, action) => {
  // console.log('sadfadsfq', action);
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMsg: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
