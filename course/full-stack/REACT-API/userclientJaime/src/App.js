import React, { Component } from 'react';

import './App.css';
import api_client from './api-client.js';

import { Form } from './components/Form.js'
import { List } from './components/List.js'
import { Header } from './components/Header.js'

class App extends Component {
  
  constructor() {
      super()
      this.state = {
        user : []
    }
  }

  componentWillMount() {
    api_client.getList().then(user => this.setState({ user }))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Form/>
        <List/>
      </div>
    );
  }
}

export default App;
