import React, { Component } from 'react';
import Title from './components/Title'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Title content= "Evaluate" />
        { this.props.children }
      </div>
    )
  }
}

export default App;
