import React from 'react';

import styles from './MessageSearchResults.css';
import MessageSearchResult from './MessageSearchResult/MessageSearchResult';

const messageSearchResults = (props) => {
  let messageSearchResults = props.messageSearchResults.map((result) => {
    return (
      <MessageSearchResult
        key={result.id}
        messageSearchResult={result}
      />
    );
  });

  return (
    <div className={styles.MessageSearchResults}>
      <div className={styles.ResultsHeader}>{props.messageSearchResults.length} Results</div>
      {messageSearchResults}
    </div>
  );
};

export default messageSearchResults;
