import React, { Component } from 'react';
import "./Title.css";

// const Title = props => <h1 className="title">{props.children}</h1>;

class Title extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">WHO CAN FLUSH AWAY TRONALD DUMP IN 2020?</h1>
            <h3 className="App-subtitle">- a memory game -</h3>
            <h4 className="App-score">Score: 0</h4>
            
          </header>
          
          <h5 className="App-intro">
            {/* To get started, edit <code>src/App.js</code> and save to reload. */}
            This game is simple, click each face but <b>only</b> once!
          </h5>
        </div>
              );
  }
}

export default Title;
