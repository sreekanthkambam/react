import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    textInput: ''
  }

  onInputChangeHandler = (event) => {
    this.setState({
      textInput: event.target.value
    });
  }

  onCharacterClick = (index) => {
    this.setState({
      textInput: this.state.textInput.slice(0, index) + this.state.textInput.slice(index + 1)
    });
  }

  render() {
    const characters = [];
    for(let i = 0; i < this.state.textInput.length; i++) {
      characters.push((
        <CharComponent
          key={i}
          character={this.state.textInput[i]}
          onClick={() => this.onCharacterClick(i)} />
      ));
    }
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" onChange={this.onInputChangeHandler} value={this.state.textInput}/>
        <p>Text Length: {this.state.textInput.length}</p>
        <ValidationComponent textLength={this.state.textInput.length} />
        {characters}
      </div>
    );
  }
}

export default App;
