import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class SearchArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section className="search-art">
      <h3>Search Art</h3>
        <form method="GET" action="/main/search">
          <input name="art-search" type="text" placeholder="art search" />
        </form>
      </section>
    );
  }
}