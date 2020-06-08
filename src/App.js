import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shoppage/Shoppage';
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-up-page/Sign-in-and-Sign-up-page';
import Header from './components/Header/Header';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
