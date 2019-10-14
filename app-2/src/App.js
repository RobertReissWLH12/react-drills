import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      games: ['soccer', 'football', 'baseball', 'basketball', 'hockey']
    }
  }
  render() {
    let gamesToDisplay = this.state.games.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
        {gamesToDisplay}  
      </div>
    );
  }
}

export default App;
