import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';
import { SignInSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { Header } from './components/header/header.component';
import { auth } from './firebase/filrebase.util';

export const App = () => {
  const [curUser, setCurUser] = useState(null);

  useEffect(() => (
    auth.onAuthStateChanged((user) => {
      setCurUser(user);
    })
  ), [curUser]);

  return (
    <div className="App">
      <Header currentSession={curUser} />
      <Switch>
        {' //Switch 只会match第一个 path, 后面再多的都不会match '}
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
