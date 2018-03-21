import React from 'react';

import styles from './MessageContainerHeader.css';
import TopicHeader from './TopicHeader/TopicHeader';
import MessageSearchBar from './MessageSearchBar/MessageSearchBar';

const messageContainerHeader = (props) => {
  return (
    <div className={styles.MessageContainerHeader}>
      <TopicHeader />
      <MessageSearchBar />
    </div>
  );
};

export default messageContainerHeader;
