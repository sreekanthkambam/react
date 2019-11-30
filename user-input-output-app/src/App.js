import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    userName: 'Sreekanth'
  };

  onUserInputChange = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>This is a User Input Output Application</h1>
        <UserInput
          name={this.state.userName}
          onUserInputChange={this.onUserInputChange} />
        <UserOutput name={this.state.userName} />
        <UserOutput name={this.state.userName} />
      </div>
    );
  }
}

export default App;
