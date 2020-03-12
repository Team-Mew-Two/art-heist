import React, { Component } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function Login (props) {
      let history = useHistory();

      return props.authObj.isAuthenticated ? (
        <section className="logout-cart-button-wrapper">
          <button onClick={() => { props.authObj.signout(() => history.push("/"));}}>Logout</button>
          <Link className="cart-button" to="/cart">Cart</Link>
        </section>
      ) : (
        <section className="login-button-wrapper">
          <Link className="log-in-button" to="/login">Log In</Link>
        </section>
      );
    }
