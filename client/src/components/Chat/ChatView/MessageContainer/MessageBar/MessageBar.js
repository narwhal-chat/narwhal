import React from 'react';

import styles from './MessageBar.css';

const messageBar = (props) => {
  return (
    <div className={styles.MessageBar}>
      <input className={styles.TextContainer} type="text" />
    </div>
  );
};

export default messageBar;