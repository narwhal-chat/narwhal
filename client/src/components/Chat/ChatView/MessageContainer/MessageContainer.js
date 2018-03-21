import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './MessageContainer.css';
import MessageContainerHeader from './MessageContainerHeader/MessagerContainerHeader';
import Messages from './Messages/Messages';
import MessageBar from './MessageBar/MessageBar';
import * as actions from '../../../../store/actions/index';

class MessageContainer extends Component {
  render() {
    let messageContainer = null;

    // Only render when we have all appropiate data
    if (this.props.activeTopic) {
      messageContainer = (
        <div className={styles.MessageContainer}>
          <MessageContainerHeader
            topicName={this.props.activeTopic.name}
          />
          <Messages />
          <MessageBar
            topicName={this.props.activeTopic.name}
          />
        </div>
      );
    }

    return messageContainer;
  }
}

const mapStateToProps = state => {
  return {
    messages: state.chat.messages,
    activeTopic: state.chat.activeTopic
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
