import React from 'react';

import styles from './MessageSearchResults.css';
import MessageSearchResult from './MessageSearchResult/MessageSearchResult';

const messageSearchResults = (props) => {
  return (
    <div className={styles.MessageSearchResults}>
      <div className={styles.ResultsHeader}>13 Results</div>
      <MessageSearchResult
      />
    </div>
  );
};

export default messageSearchResults;
