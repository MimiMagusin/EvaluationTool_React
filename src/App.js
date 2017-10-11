import React, { Component } from 'react';
import Title from './components/Title'
import SignOut from './components/users/sign-out'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < SignOut />
        < Title content= "Evaluate" />
        { this.props.children }
      </div>
    )
  }
}

export default App;
