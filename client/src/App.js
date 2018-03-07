import React, { Component } from 'react';

import './App.css';
import Auth from './components/Auth/Auth';
import ChatView from './components/Chat/ChatView/ChatView';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Auth /> */}
        <ChatView />
      </React.Fragment>
    );
  }
}

export default App;