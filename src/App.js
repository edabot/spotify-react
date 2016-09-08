import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Artist Search</h2>
        </div>
        <Search />
      </div>
    );
  }
}

export default App;
