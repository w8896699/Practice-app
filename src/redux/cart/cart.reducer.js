import CartActionTypes from './cart.type';
import { addItemToCart, reduceItemQuantity } from './cart.util';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  total: 0,
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
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        ),
      };
    case CartActionTypes.REDUCE_ITEM:
      return {
        ...state,
        cartItems: reduceItemQuantity(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
export default cartReducer;
