import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../asset/logo/logo.svg';

export const Header = () => (
  <div className="header">
    <Link classNmae="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);
export default Header;
