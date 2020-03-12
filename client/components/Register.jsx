import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      return (
      <section className="login-container__login">
        <form method="POST" action="/user/register">
          <input name="name" type="text" placeholder="username" />
          <input name="email" type="text" placeholder="email" />
          <input name="password" type="password" placeholder="password"/>
          <Link className='submission' to='/'>Register</Link>
        </form>
      </section>
      )
    }
}