import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../components/Login.jsx';

export default class LoginContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      return (
      <section className="login-container">
        <h2>Test</h2>
        <Login />
      </section>
      )
    }
}
