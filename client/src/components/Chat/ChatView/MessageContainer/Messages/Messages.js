import React from 'react';

import styles from './Messages.css';
import Message from './Message/Message';

const messages = (props) => {
  return (
    <div className={styles.messages}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default messages;