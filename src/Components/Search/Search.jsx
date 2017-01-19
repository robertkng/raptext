import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

  render() {
    return (
      <div id="search">
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.updateInput}
          onKeyDown={this.props.hitEnter}
        />
        <button onClick={this.props.pullDates}>Extract Dates</button>
      </div>
    );
  }
}


export default Search;
