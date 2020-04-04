import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../asset/logo/logo.svg'; // this syntax is just for when import SVG in React
import CartIcon from '../cart-icon/cart-icon.component';
import { auth } from '../../firebase/filrebase.util';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

const Header = ({ currentUser, hidden }) => ( // now reciving current session from reducer
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      ) }
      <CartIcon />
    </div>
    {!hidden && <CartDropDown />}
  </div>
);

// const mapStateToProps = (state) => ({
//   // currentUser: selectCurrentUser(state), 本来是这样的,但是有了多了就没意思了
//   // hidden: selectCartHidden(state),
// });
const mapStateToProps = createStructuredSelector({ // createStructuredSelector will automatically pass the top state of mapStateToProps into each subsequence select
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header); // connect is a higher component that gets mapStateToProps() to get the state value.;
