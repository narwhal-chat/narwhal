import React, { Component } from 'react';

import styles from './MessageContainer.css';
import MessageContainerHeader from './MessageContainerHeader/MessagerContainerHeader';
import Messages from './Messages/Messages';

class MessageContainer extends Component {
  render() {
    return (
      <div className={styles.MessageContainer}>
        <MessageContainerHeader />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
      </div>
    );
  }
}

export default MessageContainer;