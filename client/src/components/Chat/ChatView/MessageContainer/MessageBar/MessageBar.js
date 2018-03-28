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
        value={props.message}
        onChange={(event) => props.onMessageChange(event.target.value)}
        onKeyPress={props.onSendMessage}
      />
    </div>
  );
};

export default messageBar;
