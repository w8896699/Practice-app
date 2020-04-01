import CartActionTypes from './cart.type';
import { addItemToCart } from './cart.util';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload), // prasing everything we had before in ...state.cartItem, and add new item as action.payload in the end of the array
      };
    default:
      return state;
  }
};
export default cartReducer;
