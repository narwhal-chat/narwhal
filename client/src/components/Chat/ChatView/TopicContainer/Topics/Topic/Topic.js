import React from 'react';

import styles from './Topic.css';

const topic = (props) => {
  // Default inactive topic styling
  let topicStyle = styles.Topic;

  // Active pod styling
  if (props.isActiveTopic) {
    topicStyle = [styles.Topic, styles.Active].join(' ');
  }

  return (
    <div
      className={topicStyle}
      onClick={() => props.clicked(props.topic)}>
      <div className={styles.TopicName}># {props.topic.name}</div>
    </div>
  );
};

export default topic;
