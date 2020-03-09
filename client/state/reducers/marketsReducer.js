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
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 1000,
  newLocation: '',
};

const marketsReducer = (state = initialState, action) => {
  let marketList;
  switch (action.type) {
    case types.ADD_MARKET: {
      // increment lastMarketId and totalMarkets counters
      const lastMarketId = state.lastMarketId + 1;
      const totalMarkets = state.totalMarkets + 1;
      // create the new market object from provided data
      const newMarket = {
        // what goes in here?
        marketId: state.lastMarketId,
        locationName: state.newLocation,
        cards: 0,
        // percentOfCards: (newMarket.cards / state.totalCards) * 100,
      };
      // push the new market onto a copy of the market list
      marketList = state.marketList.slice().map((obj) => ({ ...obj }));

      marketList.push(newMarket);

      document.getElementById('update-location').value = '';

      // return updated state
      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: '',
      };
    }
    case types.SET_NEW_LOCATION:
      const newLocation = action.payload;
      return { ...state, newLocation };

    case types.ADD_CARD: {
      marketList = state.marketList.slice().map((obj) => ({ ...obj }));

      for (let i = 0; i < state.marketList.length; i += 1) {
        if (state.marketList[i].marketId === action.payload) {
          marketList[i].cards += 1;
        }
      }

      const totalCards = state.totalCards + 1;

      return {
        ...state,
        marketList,
        totalCards,
      };
    }

    case types.DELETE_CARD: {
      marketList = state.marketList.slice().map((obj) => ({ ...obj }));

      for (let i = 0; i < state.marketList.length; i += 1) {
        if (state.marketList[i].marketId === action.payload) {
          marketList[i].cards -= 1;
        }
      }

      const totalCards = state.totalCards - 1;

      return {
        ...state,
        marketList,
        totalCards,
      };
    }

    default:
      return state;
  }
};

export default marketsReducer;
