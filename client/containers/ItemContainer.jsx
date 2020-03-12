/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  // provide pertinent state here
  currentItem: state.items.currentItem,
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
            <button>Add to Cart</button>
          </Link>
        </div>
      </div>
    )
}

export default connect(mapStateToProps)(ItemContainer);