import React, { Component } from 'react';

import styles from './ChatView.css';
import PodContainer from './PodContainer/PodContainer';
import TopicContainer from './TopicContainer/TopicContainer';

class ChatView extends Component {
  render() {
    return (
      <div className={styles.ChatView}>
        <PodContainer />
        <TopicContainer />
      </div>
    );
  };
}

export default ChatView;