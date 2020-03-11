import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
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

// fake auth for RRouter protected  Routes
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}e

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

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
            <PrivateRoute path="/protected">
              <AuthButton />
            </PrivateRoute>
            <Link className="log-in-button" to="/login">Log In</Link>
          </nav>
          <Switch>
            <Route path="/login">
              <LoginContainer />
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
