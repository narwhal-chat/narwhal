import React, { Component } from 'react';

import styles from './ChatView.css';
import PodContainer from './PodContainer/PodContainer';
import TopicContainer from './TopicContainer/TopicContainer';
import MessageContainer from './MessageContainer/MessageContainer';
import DiscoverContainer from './DiscoverContainer/DiscoverContainer';
import DiscoverCategoriesContainer from './DiscoverContainer/DiscoverCategoriesContainer/DiscoverCategoriesContainer';

class ChatView extends Component {
  render() {
    return (
      <div className={styles.ChatView}>
        <PodContainer />
        <DiscoverCategoriesContainer />
        {/* <TopicContainer /> */}
        {/* <MessageContainer /> */}
        <DiscoverContainer />
      </div>
    );
  };
}

export default ChatView;