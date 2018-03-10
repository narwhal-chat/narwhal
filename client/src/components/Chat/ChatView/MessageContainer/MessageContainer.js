import React, { Component } from 'react';

import styles from './MessageContainer.css';
import MessageContainerHeader from './MessageContainerHeader/MessagerContainerHeader';

class MessageContainer extends Component {
  render() {
    return (
      <div className={styles.MessageContainer}>
        <MessageContainerHeader />
      </div>
    );
  }
}

export default MessageContainer;