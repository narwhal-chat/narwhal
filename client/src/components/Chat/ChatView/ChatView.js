import React, { Component } from 'react';

import './ChatView.css';
import PodContainer from './PodContainer/PodContainer';
import TopicContainer from './TopicContainer/TopicContainer';

class ChatView extends Component {
  render() {
    return (
      <div className="ChatView">
        <PodContainer />
        <TopicContainer />
      </div>
    );
  };
}

export default ChatView;