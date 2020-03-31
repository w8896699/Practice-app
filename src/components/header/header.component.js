import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../asset/logo/logo.svg'; // this syntax is just for when import SVG in React
import { auth } from '../../firebase/filrebase.util';

const Header = ({ currentUser }) => {
  console.log('currentUser', currentUser);
  return ( // now reciving current session from reducer
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
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header); // connect is a higher component that gets mapStateToProps() an=====-= to get the state value.;
