import React, { Component } from 'react';

import styles from './MessageContainer.css';
import MessageContainerHeader from './MessageContainerHeader/MessagerContainerHeader';
import Messages from './Messages/Messages';
import MessageBar from './MessageBar/MessageBar';

class MessageContainer extends Component {
  render() {
    console.log('is this going on');
    return (
      <div className={styles.MessageContainer}>
        <MessageContainerHeader
          name={this.props.podName}
        />
        <Messages />
        <MessageBar />
      </div>
    );
  }
}

export default MessageContainer;
