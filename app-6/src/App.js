import React, { Component } from "react";
import "./App.css";
import Todo from "./Components/Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ['bed'],
      input: ""
    }

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({input:value})
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input:""
    })
  }

  render() {
    console.log(this.state.list)
    let list = this.state.list.map((element, index) => {
      console.log(element);
      
      return <Todo key={index} task={element} />
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        
        <div>
          <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={event => this.handleInputChange(event.target.value)} />

          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}

export default App;
