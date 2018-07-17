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
          <h3 className="App-subtitle">- a memory game -</h3>
          <h4 className="App-score">Score: 0</h4>
          
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          This game is simple, click each face but only once!
        </p>

       


        <div class="wrapper">
          <span>
            <div class="card">
              <div class="img-container">
                <img src=".././public/images/berniesanders.jpg" alt="Bernie Sanders"></img>
              </div>
                <a class="style_prevu_kit"></a>
            </div>

            <div class="card">
              <div class="img-container"></div>
                <a class="style_prevu_kit"></a>
            </div>
          </span>
        </div>
        {/* const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      
    </div>
    <span className="remove">𝘅</span>
  </div>
); */}

      </div>
    );
  }
}



export default App;


// break up your application's UI into components, manage component state, and respond to user events.
