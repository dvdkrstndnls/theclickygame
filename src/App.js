import React, { Component } from 'react';
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper";
import candidates from "./candidates.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WHO CAN FLUSH AWAY TRONALD DUMP IN 2020?</h1>
          <h3 className="App-subtitle">- a memory game -</h3>
          <h4 className="App-score">Score: 0</h4>
          
        </header>
        
        <h5 className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          This game is simple, click each face but <b>only</b> once!
        </h5>

       
      

        {/* <div class="wrapper">
          
            <span class="card">
              <div class="img-container">
                <img src="images/berniesanders.jpg" alt="Bernie Sanders"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/chrismurphy.jpg" alt="Chris Murphy"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/corybooker.jpg" alt="Cory Booker"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/devalpatrick.jpeg" alt="Deval Patrick"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/elizabethwarren.jpg" alt="Elizabeth Warren"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/joebiden.jpg" alt="Joe Biden"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/kamalaharris.jpg" alt="Kamala Harris"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/kirstengillibrand.jpg" alt="Kirsten Gillibrand"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/markcuban.jpeg" alt="Mark Cuban"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/oprahwinfrey.jpg" alt="Oprah Winfrey"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/sherrodbrown.jpg" alt="Sherrod Brown"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            <span class="card">
              <div class="img-container">
                <img src="images/terrymcauliffe.jpeg" alt="Terry McAuliffe"></img>
              </div>
                <a class="style_prevu_kit"></a> 
            </span>

            
            
        </div> */}


{/* // const App = () => ( might need this again */}
  <Wrapper> 
    {/* <h1 className="title"></h1> */}
    <Card
      image={candidates[0].image}
    />
    <Card
      image={candidates[1].image}
    />
    <Card
      image={candidates[2].image}
    />
    <Card
      image={candidates[3].image}
    />
    <Card
      image={candidates[4].image}
    />
    <Card
      image={candidates[5].image}
    />
    <Card
      image={candidates[6].image}
    />
    <Card
      image={candidates[7].image}
    />
    <Card
      image={candidates[8].image}
    />
    <Card
      image={candidates[9].image}
    />
    <Card
      image={candidates[10].image}
    />
    <Card
      image={candidates[11].image}
    />
  </Wrapper>
{/* ); */}

        <footer className="App-footer">
          <h3 className="App-subtitle">&copy; 2018 by <a href="https://dvdkrstndnls.github.io/Portfolio/">DKD</a> || <a href="https://github.com/dvdkrstndnls/theclickygame">Peek at the code</a> on GitHub</h3>
          
        </footer>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
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
