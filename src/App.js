import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';
import { SignInSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout-page';

import Header from './components/header/header.component'; // 不能 import {Header}, otherwise mapStateToProps wont get any state from reducer

import * as userAction from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';


class App extends React.Component {
  unsubscribeFromAuth = null;


  // 这里我曾经用的useeffect,但是用了redux之后好像就不能用了,在我用use effect的时候,有个curuser的触发条件很奇怪,明明没有设置却会被触发
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    //   // onAuthStateChange is listerner, it listen to change in user login state, and run the callback whenever user sign out or sign in
    //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //     if (userAuth) { // only if user is login in (for now with google)
    //       const userRef = await createUserProfileDocument(userAuth);


  //       userRef.onSnapshot((snapShot) => { // get snapshot from firebase and put in our state for all
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         });
  //       });
  //     } else {
  //       setCurrentUser(userAuth);// this is for set back our user to null
  //       // addCollectionAndDocuments('collections', collections.map(({ title, items }) => ({ title, items }))); //this is just for one time use to add collection into firebase
  //     }
  //   });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          {' //Switch 只会match第一个 path, 后面再多的都不会match '}
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? (
              <Redirect to="/" />)
              : <SignInSignUpPage />)}
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({ // best practice
  currentUser: selectCurrentUser,
  // collections: selectCollectionForPreview,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(userAction.checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
