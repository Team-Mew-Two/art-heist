/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';


export const populateItems = (itemsArray) => ({
  type: types.POPULATE_ITEMS,
  payload: itemsArray,
});

// BELOW NEEDS TO VERIFY FUNCTIONALITY!!!

/* AUTHENTICATION */

/* Redux thunk to compare server data with user input from login form */
export function userLoginFetch(email, password) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, // need to check form is coming in this format
    body: JSON.stringify({
      email,
      password,
    }),
  };

  // Redux thunk to dispatch requestLogin to make an async call to our API
  return (dispatch) =>
  // config is passed as our option options object to be sure only certain requests will resolve
    fetch('/user/login', config)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: types.SIGN_IN,
          payload: data,
        });
      });
}

export function userCreateFetch(name, email, password) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, // need to check form is coming in this format
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  };

  /*
    Redux thunk to dispatch userCreateFetch to make an async call to our API to create
    a new user in our database
  */
  return (dispatch) => fetch('/user/register', config)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.REGISTER,
        payload: data,
      });
    });
}
/* Redux thunk is required to log users out */
export function userLogout() {
  return (dispatch) => fetch('/user/logout')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOGOUT,
        payload: data,
      });
    });
}
