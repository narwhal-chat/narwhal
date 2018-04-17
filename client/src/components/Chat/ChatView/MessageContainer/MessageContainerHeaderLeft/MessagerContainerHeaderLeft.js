import React from 'react';

import styles from './MessageContainerHeaderLeft.css';
import TopicHeader from './TopicHeader/TopicHeader';

const messageContainerHeaderLeft = (props) => {
  return (
    <div className={styles.MessageContainerHeaderLeft}>
      <TopicHeader
        topicName={props.topicName}
      />
    </div>
  );
};

export default messageContainerHeaderLeft;
