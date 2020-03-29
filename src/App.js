import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';
import { SignInSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { Header } from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/filrebase.util';

export const App = () => {
  const [curUser, setCurUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) { // only if user is login in (for now with google)
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => { // get snapshot from firebase and put in our state for all
          setCurUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurUser(userAuth); // this is for set back our user to null
      }
    });
  }, []);// 这里useEffect我没有把curUser设置为触发条件,具体原因我也没搞懂, 所以按我目前的理解,这个useEffect不会被触发才对,但他就是会被触发....


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
