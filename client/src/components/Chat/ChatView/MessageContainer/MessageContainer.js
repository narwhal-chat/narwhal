import React, { Component } from 'react';

import styles from './MessageContainer.css';
import MessageContainerHeader from './MessageContainerHeader/MessagerContainerHeader';
import Messages from './Messages/Messages';
import MessageBar from './MessageBar/MessageBar';

class MessageContainer extends Component {
  render() {
    return (
      <div className={styles.MessageContainer}>
        <MessageContainerHeader />
        <Messages />
        <MessageBar />
      </div>
    );
  }
}

export default MessageContainer;