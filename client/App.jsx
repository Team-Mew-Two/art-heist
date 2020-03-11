import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from './state/actions/actions';

import styles from './style/style.scss';

import LoginContainer from './containers/LoginContainer.jsx';
import ItemsContainer from './containers/ItemsContainer.jsx';
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
    // dummy data to update the store for testing
    const data = [{
      objectID: 3878,
      isHighlight: false,
      accessionNumber: 1970.196,
      accessionYear: 1970,
      isPublicDomain: true,
      primaryImage: 'https://images.metmuseum.org/CRDImages/ad/original/197977.jpg',
      primaryImageSmall: 'https://images.metmuseum.org/CRDImages/ad/web-large/197977.jpg',
    }];

    // invoke populate item function to update global store on initial render
    this.props.populateItems(data);
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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);