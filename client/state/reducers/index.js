/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import marketsReducer from './marketsReducer';
import ratingReducer from './ratingReducer';
import authenReducer from './authenReducer';



// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  markets: marketsReducer,
  rating: ratingReducer,
  authen: authenReducer,
});

// make the combined reducers available for import
export default reducers;
