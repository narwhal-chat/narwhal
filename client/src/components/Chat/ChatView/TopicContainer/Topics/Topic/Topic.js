import React from 'react';

import styles from './Topic.css';

const topic = (props) => {
  return (
    <div className={styles.Topic}># {props.topic.name}</div>
  );
};

export default topic;