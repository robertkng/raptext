import React, { Component } from 'react';
import Search from '../Search/Search.jsx';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      // phoneNumber: '',
    };
    this.reset = this.reset.bind(this);
  }

  updateInput(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  reset() {
    this.setState({
      searchTerm: '',
    });
  }

  render() {
    return (
      <div id ="search">
      <h1>Rap Text</h1>
        <Search
          searchTerm={this.state.searchTerm}
          updateInput={this.updateInput.bind(this)}
        />
      </div>
    );
  }
}
