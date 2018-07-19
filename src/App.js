import React, { Component } from 'react';
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card/Card";
import candidates from "./candidates.json";
import './App.css';



class App extends Component {
  
  /* setting this.state.candidates to the candidates json array */
  state = {
    candidates
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const candidates = this.state.candidates.filter(candidate => candidate.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({
      candidates
    });
  };


  // I think we will use this.shuffle instead of remove  :: https://vestride.github.io/Shuffle/shuffle-with-react
  //Map over this.state.candidates and render a candidate component for each candidate object
  render() {
    return (
      <Wrapper>
      <Title> Candidates </Title>  
      {this.state.candidates.map(candidate => (
          <Card 
            removeCandidate = {this.removeCandidate}
          id = {candidate.id}
          image = {candidate.image}
          />
        ))}
      </Wrapper>



     

      // <footer className = "App-footer" >
      // <h3 className = "App-subtitle" > & copy; 2018 by < a href = "https://dvdkrstndnls.github.io/Portfolio/" > DKD < /a> || <a href="https:/ / github.com / dvdkrstndnls / theclickygame ">Peek at the code</a> on GitHub</h3>

      // </footer> <p className = "App-intro" > 
      // // { /* To get started, edit <code>src/App.js</code> and save to reload. */ } </p> 

      // // {/* // </div> */}
    );
  }
}



export default App;


// break up your application's UI into components, manage component state, and respond to user events.