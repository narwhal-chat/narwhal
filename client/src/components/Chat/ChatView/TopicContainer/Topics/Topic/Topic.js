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
      # {props.topic.name}
    </div>
  );
};

export default topic;
