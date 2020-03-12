/**
 * ************************************
 *
 * @module  itemsReducer
 * @author
 * @date
 * @description reducer for artstore data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  itemsList: [],
  currentItem: [],
  currentCart: [],
};

// items reducer to update the store.items.itemList array on initial render of APP

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_ITEMS: {
      const itemsList = state.itemsList.slice();

      console.log('POPULATE_ITEMS: ', action.payload);
      for (let i = 0; i < action.payload.length; i += 1) {
        itemsList.push(action.payload[i]);
      }

      return {
        ...state,
        itemsList,
      };
    }

    case types.SELECT_ITEM: {
      const currentItem = state.itemsList.find(item => item.title === action.payload);
      // const currentItem = state.currentItem.slice();
      // currentItem.length = 0;
      // const test = state.itemsList.find(item => item.title === action.payload);
      // currentItem.push(test.primaryimage);
      // currentItem.push(test.title);
      console.log('SELECT_ITEM: ', currentItem);

      return {
        ...state,
        currentItem,
      };
    }

    case types.ADD_CART: {
      // send {userID, objectID} request to route
      // receive data from fetch request
      // add that one item data to currentCart
      console.log('ADD_CART:', action.payload);
      const currentCart = state.currentCart.slice();
      currentCart.push(action.payload);

      return {
        ...state,
        currentCart,
      };
    }

    default:
      return state;
  }
};

export default itemsReducer;
