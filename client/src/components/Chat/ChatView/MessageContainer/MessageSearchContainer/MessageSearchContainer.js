import React, { Component } from 'react';

import styles from './MessageSearchContainer.css';
import MessageSearchHeader from './MessageSearchHeader/MessageSearchHeader';
import MessageSearchResults from './MessageSearchResults/MessageSearchResults';

class MessageSearchContainer extends Component {
  render() {
    return (
      <div className={styles.MessageSearchContainer}>
        <MessageSearchHeader
        />
        <MessageSearchResults
        />
      </div>
    );
  }
}

export default MessageSearchContainer;
