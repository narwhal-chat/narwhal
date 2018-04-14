import React, { Component } from 'react';

import styles from './Messages.css';
import Message from './Message/Message';

class Messages extends Component {
  componentDidMount() {
    let messagesElement = document.getElementById('messagesScrollDiv');
    messagesElement.scrollTop = messagesElement.scrollHeight;
  }

  componentDidUpdate() {
    let messagesElement = document.getElementById('messagesScrollDiv');
    messagesElement.scrollTop = messagesElement.scrollHeight;
  }

  render() {
    let messages = this.props.messages.map((message) => {
      return (
        <React.Fragment
          key={message.id}>
          <Message
            message={message}
          />
          <div className={styles.MessageSeparator}></div>
        </React.Fragment>
      );
    });

    return (
      <div id="messagesScrollDiv" className={styles.Messages}>
        {messages}
      </div>
    );
  }
};

export default Messages;
