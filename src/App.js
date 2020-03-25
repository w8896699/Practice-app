import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import  {HomePage} from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div className="App">
      <Switch>
        {' //Switch 只会match第一个 path, 后面再多的都不会match '}
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>

  );
}

export default App;
