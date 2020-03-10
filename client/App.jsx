import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styles from './style/style.scss';

import LoginContainer from './containers/LoginContainer.jsx';
import ItemsContainer from './containers/ItemsContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import CheckoutContainer from './containers/CheckoutContainer.jsx';
import CartContainer from './containers/CartContainer.jsx';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      return (
        <section className='app-container'>
          <Router>
            <nav className='navbar'>
              <Link className='log-in-button' to='/login'>Log In</Link>
            </nav>
              <Switch>
                <Route path="/login">
                  <LoginContainer />
                </Route>
                <Route path="/items">
                  <ItemsContainer />
                </Route>
                <Route path="/cart">
                  <CartContainer />
                </Route>
                <Route path="/checkout">
                  <CheckoutContainer />
                </Route>
                <Route path="/">
                  <HomeContainer />
                </Route>
              </Switch>
          </Router>
        </section>
      )
    }
}

export default App;