import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './MessageSearchContainer.css';
import MessageSearchHeader from './MessageSearchHeader/MessageSearchHeader';
import MessageSearchResults from './MessageSearchResults/MessageSearchResults';
import * as actions from '../../../../../store/actions/index';

class MessageSearchContainer extends Component {
  render() {
    let messageSearchContainerStyling = {
      width: '0'
    };
  
    if (this.props.messageSearchContainerOpen) {
      messageSearchContainerStyling.width = '440px';
    }

    return (
      <div className={styles.MessageSearchContainer} style={messageSearchContainerStyling}>
        <MessageSearchHeader
          closeIconClicked={this.props.onMessageSearchContainerClose}
        />
        <MessageSearchResults
          messageSearchResults={this.props.messageSearchResults}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messageSearchContainerOpen: state.chat.messageSearchContainerOpen,
    messageSearchResults: state.chat.messageSearchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMessageSearchContainerClose: () => dispatch(actions.messageSearchContainerClosed())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageSearchContainer);
