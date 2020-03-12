import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      return (
      <section className="login-container__login">
        <form method="POST" action="/user/login">
          <input name="email" type="text" placeholder="email" />
          <input name="password" type="password" placeholder="password"/>
          <Link className='submission' to='/'>Log In</Link>
        </form>
        <div className="new-account">
          <p>Need an account?</p>
          <Link to='/register'>Register Here</Link>
        </div>
      </section>
      )
    }
}
