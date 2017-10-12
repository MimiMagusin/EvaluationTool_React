import React, { Component } from 'react';
import Title from './components/Title'
import SignOut from './components/users/sign-out'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <div>
          < SignOut />
          < Title content= "Evaluate" />
          { this.props.children }
        </div>
      </MuiThemeProvider>    
      </div>
    )
  }
}

export default App;
