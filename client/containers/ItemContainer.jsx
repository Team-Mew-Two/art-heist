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
        { console.log(props) }
        <img src={ props.currentItem.primaryimage } alt={ props.currentItem.title } ></img>
      </div>
    )
}

export default connect(mapStateToProps)(ItemContainer);