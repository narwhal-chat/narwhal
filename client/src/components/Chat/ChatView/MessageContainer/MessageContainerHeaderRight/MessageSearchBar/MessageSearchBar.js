import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './MessageSearchBar.css';
import * as actions from '../../../../../../store/actions/index';

class MessageSearchBar extends Component {
  state = {
    messageSearchQuery: ''
  }

  onMessageSearchChange = (event) => {
    this.setState({
      messageSearchQuery: event.target.value
    });
  }

  onMessageSearchKeypress = (event) => {
    if (event.key === 'Enter') {
      this.props.onfetchMessageSearchResults(this.state.messageSearchQuery);
    }
  }

  render() {
    return (
      <input
        className={styles.MessageSearchBar}
        type="text"
        value={this.state.messageSearchQuery}
        placeholder="Search"
        onChange={this.onMessageSearchChange}
        onKeyPress={this.onMessageSearchKeypress}
      />
    );
  }
};

const mapStateToProps = state => {
  return {
    messageSearchResults: state.chat.messageSearchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onfetchMessageSearchResults: (query) => dispatch(actions.fetchMessageSearchResults(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageSearchBar);
