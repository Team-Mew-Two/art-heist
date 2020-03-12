import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

export default class Register extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      return (
      <section className="login-container__login">
        <h3>Register</h3>
        <form method="POST" action="/user/register">
          <input name="name" type="text" placeholder="username" />
          <input name="email" type="text" placeholder="email" />
          <input name="password" type="password" placeholder="password"/>
        </form>
        <Link className='submission' to='/'>Register</Link>
      </section>
      )
    }
}