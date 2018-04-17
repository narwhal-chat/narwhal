import React, { Component } from 'react';

import styles from './MessageSearchContainer.css';
import MessageSearchHeader from './MessageSearchHeader/MessageSearchHeader';

class MessageSearchContainer extends Component {
  render() {
    return (
      <div className={styles.MessageSearchContainer}>
        <MessageSearchHeader
        />
      </div>
    );
  }
}

export default MessageSearchContainer;
