import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persons from './Persons/Persons';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [ 
        { name: 'Sreekanth', id: 1 },
        { name: 'Charishma', id: 2 },
        { name: 'Lucy', id: 3 }
      ]
    };
  }

  onPersonsChange() {
    this.setState({
      persons: [
        { name: 'Sreekanth', id: 1 },
        { name: 'Charishma', id: 2 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.onPersonsChange()}>Change Persons</button>
        <Persons persons={this.state.persons}/>
      </div>
    );
  }
}

export default App;
