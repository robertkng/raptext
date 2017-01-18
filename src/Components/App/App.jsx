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

  searchDate() {
    // Headers
    const X_ZUMO_AUTH = process.env.X_ZUMO_AUTH;
    const X_ZUMO_APPLICATION = process.env.X_ZUMO_APPLICATION;
    const ContentType = "application/json; charset=utf-8";

    // URL
    const APP_URL = process.env.APP_URL;

    // Body
    const USER_ID = process.env.USER_ID;

    const authorization = () => `Basic ${window.btoa(`${X-ZUMO-AUTH}:${X-ZUMO-APPLICATION}`)}`;

    const authParameters = {
      headers: {
        Authorization: authorization(),
        'Content-Type': 'application/json; charset=utf-8',
      },
        body: JSON.stringify({ 'USER_ID': USER_ID })
    };

    // const MobileServiceClient = WindowsAzure.MobileServiceClient;
    // const client = new MobileServiceClient('AppUrl', 'AppKey');

    const PROFILE_ENDPOINT = `${APP_URL}/search?query=${this.state.searchTerm}`;
    fetch(PROFILE_ENDPOINT, authParameters)
    .then(r => r.json())
    .then((result) => {
      this.setState({
        searchTerm: '',
      });
      this.reset();
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
