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
  // totalMarkets: 0,
  // totalCards: 0,
  itemsList: [],
  // lastMarketId: 1000,
  // newLocation: '',
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

    default:
      return state;
  }
};

export default itemsReducer;
