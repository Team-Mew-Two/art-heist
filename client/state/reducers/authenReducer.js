/**
 * ************************************
 *
 * @module  authenReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  currentUser: null,
  isLogged: false,
};

const authenReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      if (action.payload === null) {
        return state;
      }
      return {
        ...state,
        currentUser: action.payload,
        isLogged: true,
      };
    case types.REGISTER:
      return {
        ...state,
        currentUser: action.payload,
        isLogged: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        currentUser: null,
        isLogged: false,
      };
    default: return state;
  }
};

export default authenReducer;
