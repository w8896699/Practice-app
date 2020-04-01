/**
 * this function check if the item is already in the cart list, if yes, simply add
 * quanlity instead of add a identical item into the list. If item is not in the list
 * add into the list and add quality property
 *
 * @param {arry} cartItems, existing array of item that is already in carItem list
 * @param {object} cartItemToAdd new item that user wants to add
 * @returns {array} a new array that has updated quantity of item
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return (cartItems.map((cartItem) => (cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];// quantity proerty get attatched the first around since this if block won't run when it's a new item
};

export default addItemToCart;
