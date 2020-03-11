import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ItemThumb from './ItemThumb.jsx';

const mapStateToProps = state => ({
  // provide pertinent state here
  items: state.items.itemsList,
});

class ItemList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  render() {

    const builtThumbs = []

    for (let i = 0; i < this.props.items.length; i += 1) {
      builtThumbs.push(
        <ItemThumb
          key={ `thumbnail${i}` }
          primaryImage={ this.props.items[i].primaryimage }
          imageNumber={ `${i}` }
          title={ this.props.items[i].title }
        />);
    }

    return (
      <section className="item-list">
        <h3>Item List</h3>
        { builtThumbs }
      </section>
    );
  }
}

export default connect(mapStateToProps)(ItemList)