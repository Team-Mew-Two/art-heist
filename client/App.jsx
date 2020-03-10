import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <section>
          <h1>Hello Jason!!!!</h1>
            <Router>
              <Switch>
                <Route path="/Login">
                  <LoginContainer />
                </Route>
                <Route path="/Home">
                  <HomeContainer />
                </Route>
                <Route path="/Items">
                  <ItemsContainer />
                </Route>
                <Route path="/Cart">
                  <CartContainer />
                </Route>
                <Route path="/Checkout">
                  <CheckoutContainer />
                </Route>
              </Switch>
            </Router>
        </section>
      )
    }
}

export default App;