import React from 'react';

import styles from './MessageContainerHeader.css';
import TopicHeader from './TopicHeader/TopicHeader';
import MessageSearchBar from './MessageSearchBar/MessageSearchBar';

const messageContainerHeader = (props) => {
  return (
    <div className={styles.MessageContainerHeader}>
      <TopicHeader
        topicName={props.topicName}
      />
      {/* <MessageSearchBar /> */}
    </div>
  );
};

export default messageContainerHeader;
