import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage';

const HasPage = () => (

  <div>
    <h1> Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        {' //Switch 只会match第一个 path, 后面再多的都不会match '}
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HasPage} />
      </Switch>
    </div>

  );
}

export default App;
