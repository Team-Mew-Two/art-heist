import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from './state/actions/actions';

import styles from './style/style.scss';

import LoginContainer from './containers/LoginContainer.jsx';
import ItemContainer from './containers/ItemContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import CheckoutContainer from './containers/CheckoutContainer.jsx';
import CartContainer from './containers/CartContainer.jsx';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  populateItems: (itemsArray) => dispatch(actions.populateItems(itemsArray)),
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/api/getItems')
      .then((res) => res.json())
      .then((data) => {
        // invoke populate item function to update global store on initial render
        this.props.populateItems(data);
      })
      .catch((error) => {
        new Error('Error in fetching Items', error)
      })
  }


  render() {
    return (
      <section className="app-container">
        <Router>
          <nav className="navbar">
            <Link className="log-in-button" to="/login">Log In</Link>
          </nav>
          <Switch>
            <Route path="/login">
              <LoginContainer />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/items">
              <ItemContainer />
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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
