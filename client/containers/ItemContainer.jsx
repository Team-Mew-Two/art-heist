/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../state/actions/actions';

const mapStateToProps = state => ({
  // provide pertinent state here
  userId: state.user.userId,
  currentItem: state.items.currentItem,
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addItemToCart: (userId, itemId) => dispatch(actions.addItemToCart(userId, itemId)),
});

export function ItemContainer (props) {
    return (
      <div className='rowC'>
        <div>
          <img src={ props.currentItem.primaryimage } 
               alt={ props.currentItem.title } ></img>
        </div>
        <div className='description'>
          <h3> { props.currentItem.title } </h3>
          <h4> Artist: { props.currentItem.artist } </h4>
          <h4> Date: { props.currentItem.date } </h4>
          <h4> Price: ${ props.currentItem.price } </h4>
          <Link to='/cart'>
            <button onClick={ () => props.addItemToCart(props.userId, props.currentItem.objectid) }>Add to Cart</button>
          </Link>
        </div>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);