import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Player from './Player.jsx'
import Scheduler from './Scheduler.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <Scheduler />
      </div>
    );
  }
}

export default App;
