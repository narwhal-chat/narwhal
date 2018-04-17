import React from 'react';

import styles from './MessageContainerHeaderRight.css';
import MessageBar from './MessageSearchBar/MessageSearchBar';

const messageContainerHeaderRight = (props) => {
  return (
    <div className={styles.MessageContainerHeaderRight}>
      <MessageBar
      />
    </div>
  );
};

export default messageContainerHeaderRight;
