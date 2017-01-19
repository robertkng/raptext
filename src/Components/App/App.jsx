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

    // Body
    const USER_ID = process.env.USER_ID;

    // URL
    const APP_URL = process.env.APP_URL;

    const authorization = () => `Basic ${window.btoa(`${X_ZUMO_AUTH}:${X_ZUMO_APPLICATION}`)}`;

    const authParameters = {
      method: 'POST',
      headers: {
        Authorization: authorization(),
        'Content-Type': 'application/json; charset=utf-8',
      },
        body: JSON.stringify({ 'USER_ID': USER_ID })
    };
    fetch(APP_URL, authParameters)
    .then(r => r.json())
    .then((result) => {
      this.setState({
        dates: result,
      })
    })
    .catch(err => console.log(err))
  }

  pullDates(){
    const X_ZUMO_AUTH = process.env.X_ZUMO_AUTH;
    const X_ZUMO_APPLICATION = process.env.X_ZUMO_APPLICATION;

    // URL
    const APP_URL = process.env.APP_URL;

    const authorization = () => `Basic ${window.btoa(`${X_ZUMO_AUTH}:${X_ZUMO_APPLICATION}`)}`;

    const authParameters = {
      method: 'GET',
      headers: {
        Authorization: authorization(),
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    fetch(APP_URL, authParameters)
    .then(r => r.json())
    .then((data) => {
      console.log('print', data)
      this.setState({
        multipleDates: data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div id ="search">
      <h1>Rap Text</h1>
        <Search
          pullDates={this.pullDates.bind(this)}
          updateInput={this.updateInput.bind(this)}
        />
      </div>
    );
  }
}
