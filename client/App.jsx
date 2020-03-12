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

import styles from './style/style.scss'

import LoginContainer from './containers/LoginContainer.jsx';
import ItemContainer from './containers/ItemContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import CheckoutContainer from './containers/CheckoutContainer.jsx';
import CartContainer from './containers/CartContainer.jsx';
import Register from './components/Register.jsx';

import NavBarButtons from './components/NavBarButtons.jsx';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  populateItems: (itemsArray) => dispatch(actions.populateItems(itemsArray)),
});

// fake auth for RRouter protected  Routes
  const fakeAuth2 = { //
    isAuthenticated: true,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute(props, {...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        props.authObj.isAuthenticated ? (
          <CartContainer />
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
}

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

  const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

    return (
      <section className="app-container">
        <Router>
          <nav className="navbar">
            <Link to="/protected">Protected</Link>
            <NavBarButtons
              authObj={ fakeAuth }
            />
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
            <PrivateRoute path="/protected" authObj={ fakeAuth }>
              <CartContainer />
            </PrivateRoute>
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
