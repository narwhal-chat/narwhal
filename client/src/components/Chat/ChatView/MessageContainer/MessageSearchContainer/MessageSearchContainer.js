import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './MessageSearchContainer.css';
import MessageSearchHeader from './MessageSearchHeader/MessageSearchHeader';
import MessageSearchResults from './MessageSearchResults/MessageSearchResults';
import * as actions from '../../../../../store/actions/index';

class MessageSearchContainer extends Component {
  componentDidMount() {
    this.props.onfetchMessageSearchResults();
  }

  render() {
    return (
      <div className={styles.MessageSearchContainer}>
        <MessageSearchHeader
        />
        <MessageSearchResults
        />
      </div>
    );
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
    onfetchMessageSearchResults: (query) => dispatch(actions.fetchMessageSearchResults(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageSearchContainer);
