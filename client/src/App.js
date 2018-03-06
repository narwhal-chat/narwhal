import React, { Component } from 'react';
import './App.css';
import Signup from './containers/Auth/Signup/Signup'
import Login from './containers/Auth/Login/Login';
//test
import Splash from './containers/Auth/Signup/LogoSplash/LogoSplash'

class App extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
