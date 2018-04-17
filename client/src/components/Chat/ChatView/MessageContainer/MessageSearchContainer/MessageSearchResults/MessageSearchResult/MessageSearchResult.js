import React from 'react';

import styles from './MessageSearchResult.css';

const messageSearchResult = (props) => {
  return (
    <div className={styles.MessageSearchResult}>{props.messageSearchResult.message_text}</div>
  );
};

export default messageSearchResult;
