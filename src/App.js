import React, { Component } from 'react';
import Title from './components/Title'
import BatchesContainer from './components/BatchesContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Title content= "Evaluate" />
        <BatchesContainer batches={ [] } />
        { this.props.children }
      </div>
    )
  }
}

export default App;
