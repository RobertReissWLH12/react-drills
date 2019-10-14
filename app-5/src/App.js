import React, { Component } from "react";
import "./App.css";
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://i.pinimg.com/originals/c4/a2/4e/c4a24ee616ecccdd326df7ae88b8ca09.jpg"} />       
      </div>
    );
  }
}

export default App;
