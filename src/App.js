import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WHO CAN BEAT TRUMP IN 2020?</h1>
          <h3 className="App-title">- a memory game -</h3>
          
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          This game is simple, click each face but only once!
        </p>
      </div>
    );
  }
}

export default App;
