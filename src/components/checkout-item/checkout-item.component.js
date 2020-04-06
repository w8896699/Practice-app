import React from 'react';
import { faTrash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import * as setCartItem from '../../redux/cart/cart.action';


import './checkout-item.style.scss';

const CheckoutItem = ({
  cartItem, removeItem, addItem, reduceItem,
}) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="description">
        {name}
      </span>
      <span className="quantity">
        <FontAwesomeIcon className="icon" onClick={() => reduceItem(cartItem)} icon={faChevronLeft} />
        {quantity}
        <FontAwesomeIcon className="icon" onClick={() => addItem(cartItem)} icon={faChevronRight} />
      </span>
      <span className="price">{price}</span>
      <div className="remove-button">
        <FontAwesomeIcon onClick={() => removeItem(cartItem)} icon={faTrash} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(setCartItem.removeItemFromCart(item)),
  addItem: (item) => dispatch(setCartItem.addItem(item)),
  reduceItem: (item) => dispatch(setCartItem.reduceItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
