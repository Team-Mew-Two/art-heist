/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  itemsList: [],
  currentItem: [],
};

// items reducer to update the store.items.itemList array on initial render of APP

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_ITEMS: {
      const itemsList = state.itemsList.slice();

      console.log('action payload: ', action.payload);
      for (let i = 0; i < action.payload.length; i += 1) {
        itemsList.push(action.payload[i]);
      }

      return {
        ...state,
        itemsList,
      };
    }

    case types.SELECT_ITEM: {
      console.log('action payload: ', action.payload);
      const currentItem = state.itemsList.find(item => item.title === action.payload);
      // const currentItem = state.currentItem.slice();
      // currentItem.length = 0;
      // const test = state.itemsList.find(item => item.title === action.payload);
      // currentItem.push(test.primaryimage);
      // currentItem.push(test.title);
      console.log('selected information: ', currentItem);

      return {
        ...state,
        currentItem,
      };
    }

    default:
      return state;
  }
};

export default itemsReducer;
