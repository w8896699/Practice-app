import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StyleButton from '../styled-button/styled-button.component';
import './cart-dropdown.style.scss';

import CardItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="drop-down">
    <div className="cart-item">
      { cartItems.length
        ? cartItems.map((item) => (
          <CardItem key={item.id} item={item} />
        ))
        : <span className="empty"> Your Cart is Empty</span>}
    </div>

    <StyleButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden()); // connect pass dispatch into the component, thats why we dont need to write a new mapDispatchToProps in here
    }}
    >
      {' '}
      Go To CheckOut

    </StyleButton>


  </div>
);

const mapStatetoProps = (state) => ({ // this is not the best practice, but leave it here for later reference
  cartItems: selectCartItems(state), // the reason why we use select is because we dont want to other unrelative state change will lead to this component update
});

export default withRouter(connect(mapStatetoProps)(CartDropDown));
