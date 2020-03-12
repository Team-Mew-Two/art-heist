/* eslint-disable */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  // provide pertinent state here
  currentItem: state.items.currentItem,
});

export function ItemContainer (props) {
    return (
      <div>
        <h3> { props.currentItem.title } </h3>
        <img src={ props.currentItem.primaryimage } 
             alt={ props.currentItem.title } ></img>
        <h4> Artist: { props.currentItem.artist } </h4>
        <h4> Date: { props.currentItem.date } </h4>
        <h4> Price: ${props.currentItem.price} </h4>
      </div>
    )
}

export default connect(mapStateToProps)(ItemContainer);