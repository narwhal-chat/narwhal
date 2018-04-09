import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './MessageContainer.css';
import MessageContainerHeader from './MessageContainerHeader/MessagerContainerHeader';
import Messages from './Messages/Messages';
import MessageBar from './MessageBar/MessageBar';
import * as actions from '../../../../store/actions/index';

class MessageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  componentDidMount() {
    this.props.onConnectSocket();
  }

  componentWillUnmount() {
    this.props.onDisconnectSocket();
  }

  onMessageChange = (message) => {
    this.setState({
      message: message
    });
  }

  onSendMessage = (event) => {
    if (event.key === 'Enter') {
      this.props.onSendMessage(this.state.message);
      this.setState({
        message: ''
      });
    }
  }

  render() {
    let messageContainer = null;

    // Only render when we have all appropiate data
    if (this.props.activeTopic) {
      messageContainer = (
        <div className={styles.MessageContainer}>
          <MessageContainerHeader
            topicName={this.props.activeTopic.name}
          />
          <Messages
            messages={this.props.messages}
          />
          <MessageBar
            topicName={this.props.activeTopic.name}
            message={this.state.message}
            onMessageChange={this.onMessageChange}
            onSendMessage={this.onSendMessage}
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
    onConnectSocket: () => dispatch(actions.connectSocket()),
    onDisconnectSocket: () => dispatch(actions.diconnectSocket()),
    onSendMessage: (message) => dispatch(actions.messageSent(message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
