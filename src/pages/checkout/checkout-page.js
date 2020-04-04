import React from 'react';
import './checkout-page.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectCartItems, selectCartItemsTotalPrice } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, total }) => {
  console.log(total);
  return (
    <div className="checkout-page">
      <div className="header">
        <div className="block">
          <span>Product</span>
        </div>
        <div className="block">
          <span>Description</span>
        </div>
        <div className="block">
          <span>Quantity</span>
        </div>
        <div className="block">
          <span>Price</span>
        </div>
        <div className="block">
          <span> Remove</span>
        </div>
      </div>
      {
          cartItems.map((item) => (
            <CheckoutItem key={item.id} cartItem={item} />
          ))
      }
      <div className="total">
        <span>
          TOTAL: $
          {total}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
