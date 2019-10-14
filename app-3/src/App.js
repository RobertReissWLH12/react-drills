import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: '',
      games: ['soccer', 'basketball', 'baseball', 'hockey', 'football']
    }
  }

  handleChange(filter) {
    this.setState({filterString: filter})
  }

  render() {
    let gamesToDisplay = this.state.games
    .filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
        <input onChange={event => this.handleChange(event.target.value)} type="text" />
        {gamesToDisplay}
      </div>
    );
  }
}

export default App;
