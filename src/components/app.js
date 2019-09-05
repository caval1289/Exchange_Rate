import React, { Component } from 'react';
import SearchBar from '../containers/search-bar'
import RateExchangeList from '../containers/rate_exchange_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <RateExchangeList />
      </div>
    );
  }
}
