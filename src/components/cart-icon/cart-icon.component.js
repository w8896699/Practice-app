import React from 'react';
import './cart-icon.style.scss';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBagIcon } from '../../asset/logo/shoppingbag.svg';

import * as setCartDropDownAction from '../../redux/cart/cart.action';

const CartIcon = ({ toggleCartHidden }) => (

  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count"> 0 </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(setCartDropDownAction.toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
