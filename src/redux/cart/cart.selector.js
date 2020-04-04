import { createSelector } from 'reselect'; // import selector need to import this ,output selector doesn;t


const selectCart = (state) => state.cart; // 需要用到的selector, 比如这里不需要user,就不用加在这里了,


export const selectCartItems = createSelector(
  [selectCart], // an array of input selector
  (cart) => cart.cartItems, // a function that will return the state we want from selector as output
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((totalNumber, item) => totalNumber + item.quantity, 0), // reduce, two arg, second is initial state

);
export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0), // reduce, two arg, second is initial state

);

export default selectCartItems;
