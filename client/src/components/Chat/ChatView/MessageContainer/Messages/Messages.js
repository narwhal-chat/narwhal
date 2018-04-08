import React, { Component } from 'react';

import styles from './Messages.css';
import Message from './Message/Message';

class Messages extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    let messages = this.props.messages.map((message) => {
      return (
        <React.Fragment>
          <Message
            userData={this.props.userData}
            message={message}
          />
          <div className={styles.MessageSeparator}></div>
        </React.Fragment>
      );
    });

    return (
      <div className={styles.Messages}>
        {messages}
        <div ref={el => { this.el = el; }} />
      </div>
    );
  }
};

export default Messages;
