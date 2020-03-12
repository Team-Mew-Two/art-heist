import React, { Component } from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../state/actions/actions';


const mapStateToProps = state => ({
  // provide pertinent state here
  // items: state.items.itemsList,
  store: state,
});

const mapDispatchToProps = dispatch => ({
  login: (email, username, password) => dispatch(actions.userLoginFetch(email, username, password))
});

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
      this.loginHandleClick = this.loginHandleClick.bind(this);
    }

    loginHandleClick() {
      const email = document.getElementById('email').value;
      // const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      console.log("inside login handle");
      console.log("email: ", email);
      // console.log("username: ", username);
      console.log("password: ", password);


      this.props.login(email, password);
      // console.log("store after login click: ", this.props.store);

    }


    render() {
      return (
      <section className="login-container__login">
        {/* <form method="POST" action="/user/login"> */}
          <input id="email" name="email" type="text" placeholder="email" />
          <input id="password" name="password" type="password" placeholder="password"/>
          <Link className='submission' to='/' onClick={this.loginHandleClick}>Log In</Link>
        {/* </form> */}
        <div className="new-account">
          <p>Need an account?</p>
          <Link to='/register'>Register Here</Link>
        </div>
      </section>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
