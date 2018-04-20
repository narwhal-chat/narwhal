import React from 'react';

import styles from './MessageSearchResults.css';
import MessageSearchResult from './MessageSearchResult/MessageSearchResult';

const messageSearchResults = (props) => {
  let messageSearchHeader = null;
  let messageSearchResults = null;

  if (!props.messageSearchResults.length) {
    messageSearchResults = (
      <div className={styles.NoResults}>Nothin' found</div>
    );
  } else {
    messageSearchHeader = <div className={styles.ResultsHeader}>{props.messageSearchResults.length} {props.messageSearchResults.length === 1 ? 'Result' : 'Results'}</div>;
    messageSearchResults = props.messageSearchResults.map((result) => {
      return (
        <MessageSearchResult
          key={result.id}
          messageSearchResult={result}
        />
      );
    });
  }

  return (
    <div className={styles.MessageSearchResults}>
      {messageSearchHeader}
      {messageSearchResults}
    </div>
  );
};

export default messageSearchResults;
