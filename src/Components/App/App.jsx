import React, { Component } from 'react';
import Search from '../Search/Search.jsx';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      result: {},
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

  // searchRapper() {
  //   const CLIENT_ID = process.env.CLIENT_ID;
  //   const CLIENT_SECRET + process.env.CLIENT_SECRET;
  //   const authorization = () => `Basic ${window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`;

  //   const authParameters = {
  //     headers: {
  //       Authorization: authorization(),
  //     },
  //   };
  //   const RAPCHAT_API_ENDPOINT = `https://apidev.rapchat.me=${this.state.searchTerm}`;
  //   fetch(RAPCHAT_API_ENDPOINT, authParameters)
  //   .then(r => r.json())
  //   .then((result) => {
  //     this.setState({
  //       image: result.data[0].assets.preview_mp4.url,
  //       searchTerm: '',
  //     });
  //     this.reset();
  //   });
  // }

  searchRapper() {
    fetch(`https://apidev.rapchat.me=${this.state.searchTerm}`, {
      headers: {
      'Content-Type': 'application/json'
      },
      method: 'GET',
      body: JSON.stringify(this.state.result)
      })
    .then(r => r.json())
    .then((found) => {
      this.setState({
        result: found
      });
    })
    .catch(err => console.log(err));
  }


  // }

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
