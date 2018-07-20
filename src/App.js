import React, { Component } from 'react';
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card/Card";
import candidates from "./candidates.json";
import './App.css';



class App extends Component {
  
  /* setting this.state.candidates to the candidates json array */
  state = {
    score: 0,
    candidates
  };

  //  //clear state on initialization
  //  componentDidMount() {
  //   this.resetGame();
  // }



  // //reset all clicked images to unclick and reset score to zero
  // resetGame = () => {
  //   console.log("IN RESET");
  //   console.log("imagesJSON: " + JSON.stringify(imagesJSON));

  //   let _images = this.state.images;
  //   _images.forEach(image => image.clicked = false);

  //   this.setState({
  //     score: 0,
  //     images: _images,
  //   }, this.documentState);

  // }

  // //helper function to give me an array of non-repeating random numbers between 0 and images.length-1
  // generateRenderOrder = () => {
  //   let renderOrder = [];
  //   while (renderOrder.length < this.state.images.length) {
  //     let random = Math.floor(Math.random() * this.state.images.length)
  //     // console.log("random #: " + random)
  //     if (renderOrder.indexOf(random) === -1) {
  //       renderOrder.push(random);
  //       //console.log("PUSHED renderOrder:" + renderOrder);
  //     }
  //   }
  //   return renderOrder;
  // }

  // generateImagesInRandomOrder = () => {
  //   let _images = [];
  //   let renderOrder = this.generateRenderOrder();
  //   for (let i = 0; i < renderOrder.length; i++) {

  //     _images.push(this.state.images.find(element => element.id === renderOrder[i]));

  //     //console.log("IMAGES: " + JSON.stringify(_images));
  //   }
  //   console.log("IN SHUFFLE IMAGES");
  //   console.log(JSON.stringify(_images));
  //   this.setState({ images: _images, }, this.documentState);
  // }

  // documentState() {
  //   console.log(`Score: ${this.state.score}`);
  //   console.log(`Images: ${JSON.stringify(this.state.images)}`);
  // }

  // clickHandler = event => {
  //   let _images = this.state.images;
  //   let _score = this.state.score;
  //   console.log("IN CLICK HANDLER");
  //   console.log("Target: " + JSON.stringify(this.state.images[event.target.id]));
  //   console.log("Click Status: " + this.state.images[event.target.id].clicked);
  //   if (this.state.images[event.target.id].clicked) {
  //     console.log("IN CLICK HANDLE, RESET GAME");
  //     this.resetGame();
  //   }
  //   else {
  //     _score += 10;
  //     _images[event.target.id].clicked = true;
  //     console.log("IN CLICK HANDLER, CLICK FALSE LOGIC");
  //     this.setState({
  //       score: _score,
  //       images: _images
  //     }, this.documentState);
  //   }
  //   this.generateImagesInRandomOrder();
  // }

  removeCandidate = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    
   /**
 * Shuffles array in place. ES6 version
 * @ param {Array} a items An array containing the items.
 */

  for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
 
    let x = this.state.score+1

    
    // this.state.candidates.filter(candidate => candidate.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({
      candidates, score:x
    });
  };

//NEED TO DO:
//CREATE RESET FUNCTION
//Call function on my allCandidatesClickedOnce
//if candidateClicked === candidateAlreadyClicked
//store highScore to currentScore
//then setscore to 0 

// get card to preserve the function of whether clikced or not, if not store the ones liked as array in the app.js state, then push each clicked on to an array

  //Map over this.state.candidates and render a candidate component for each candidate object
  render() {
    return (
      <Wrapper>
       
      <Title score= {this.state.score} 
      /> 
      {this.state.candidates.map(candidate => (
          <Card 
            removeCandidate = {this.removeCandidate}
          id = {candidate.id}
          image = {candidate.image}
          clicked = "false"
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


