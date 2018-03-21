import React from 'react';

import styles from './TopicHeader.css';

const topicHeader = (props) => {
  return (
    <div className={styles.TopicHeader}># {props.topicName}</div>
  );
};

export default topicHeader;
