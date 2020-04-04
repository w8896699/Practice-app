import React from 'react';
import './cart-icon.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'
import { ReactComponent as ShoppingBagIcon } from '../../asset/logo/shoppingbag.svg';

import * as setCartDropDownAction from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, itemCount }) => (

  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">
      {itemCount}
    </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(setCartDropDownAction.toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
