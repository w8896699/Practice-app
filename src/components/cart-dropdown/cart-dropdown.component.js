import React from 'react';
import { connect } from 'react-redux';
import StyleButton from '../styled-button/styled-button.component';
import './cart-dropdown.style.scss';
import CardItem from '../cart-item/cart-item.component';

const CartDropDown = ({ cartItems }) => (
  <div className="drop-down">
    <div className="cart-item">
      {cartItems.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
    <StyleButton> Go To CheckOut</StyleButton>


  </div>
);

const mapStatetoProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStatetoProps)(CartDropDown);
