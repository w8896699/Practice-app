import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../asset/logo/logo.svg'; // this syntax is just for when import SVG in React
import { auth } from '../../firebase/filrebase.util';

export const Header = ({ currentSession }) => (
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
      {currentSession ? (
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
export default Header;
