import React from 'react';

import styles from './MessageSearchBar.css';

const messageSearchBar = (props) => {
  return (
    <input className={styles.MessageSearchBar} type="text" placeholder="Search for messages" />
  );
};

export default messageSearchBar;