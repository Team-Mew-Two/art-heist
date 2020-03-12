import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      return (
      <section className="login-container__login">
        <h3>Log-In</h3>
        <form method="POST" action="/user/login">
          <input name="email" type="text" placeholder="email" />
          <input name="password" type="password" placeholder="password"/>
        </form>
        <Link className='submission' to='/'>Log In</Link>
        <p>Need an account? <Link to='/register'>Register Here</Link></p>
      </section>
      )
    }
}
