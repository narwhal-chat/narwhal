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
    let messages = (
      <React.Fragment>
        <Message />
        <div className={styles.MessageSeparator}></div>
      </React.Fragment>
    );

    return (
      <div className={styles.Messages}>
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        {messages}
        <div ref={el => { this.el = el; }} />
      </div>
    );
  }
};

export default Messages;
