import React from 'react';

import styles from './MessageSearchHeader.css';
import CloseIcon from 'react-icons/lib/io/close-round'

const messageSearchHeader = (props) => {
  return (
    <div className={styles.MessageSearchHeader}>
      <div className={styles.HeaderText}>Search Results</div>
      <CloseIcon
        className={styles.CloseIcon}
      />
    </div>
  );
};

export default messageSearchHeader;
