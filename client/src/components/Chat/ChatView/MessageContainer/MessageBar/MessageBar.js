import React from 'react';

import styles from './MessageBar.css';

const messageBar = (props) => {
  let placeholderText = `Message #${props.topicName}`;

  return (
    <div className={styles.MessageBar}>
      <input
        className={styles.TextContainer}
        type="text"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default messageBar;
