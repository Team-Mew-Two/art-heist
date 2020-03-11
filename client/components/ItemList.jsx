import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css'

import ItemThumb from './ItemThumb.jsx';

const mapStateToProps = state => ({
  // provide pertinent state here
  items: state.items.itemsList,
});

// fx to update current selection state and to route to Items Detail Page (ItemsContainer)

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.handleOnAlways = this.handleOnAlways.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleOnAlways(instance){
      console.log('All Loaded');
  };

  handleDone(instance){
    console.log('handle done')
  };

  render() {

    const builtThumbs = []

    for (let i = 0; i < this.props.items.length; i += 1) {
      builtThumbs.push(
        <ItemThumb
          key={ `thumbnail${i}` }
          primaryImage={ this.props.items[i].primaryimage }
          imageNumber={ `${i}` }
          title={ this.props.items[i].title }
        />
      );
    }

    const breakpointColumnsObj = {
      default: 5,
      1100: 4,
      700: 3,
      500: 2
    };

    return (
      <section className="item-list">
        <h3>Item List</h3>
        <Masonry
          breakpointCols={ breakpointColumnsObj }
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          { builtThumbs }
        </Masonry>
      </section>
    );
  }
}

export default connect(mapStateToProps)(ItemList)