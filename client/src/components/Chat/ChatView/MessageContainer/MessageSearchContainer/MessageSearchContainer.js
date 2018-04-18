import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './MessageSearchContainer.css';
import MessageSearchHeader from './MessageSearchHeader/MessageSearchHeader';
import MessageSearchResults from './MessageSearchResults/MessageSearchResults';
import * as actions from '../../../../../store/actions/index';

class MessageSearchContainer extends Component {
  render() {
    return (
      <div className={styles.MessageSearchContainer}>
        <React.Fragment>
          <MessageSearchHeader
          />
          <MessageSearchResults
            messageSearchResults={this.props.messageSearchResults}
          />
        </React.Fragment>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageSearchContainer);
