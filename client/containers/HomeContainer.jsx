import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchArt from '../components/SearchArt.jsx';
import ItemList from '../components/ItemList.jsx';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section className="main-container">
        {/* <SearchArt /> */}
        <ItemList />
      </section>
    );
  }
}
