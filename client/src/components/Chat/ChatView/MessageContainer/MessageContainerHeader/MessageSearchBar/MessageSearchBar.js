import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './MessageSearchBar.css';
import searchIcon from '../../../../../../assets/images/search-icon.svg';
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
    if (event.key === 'Enter' && this.state.messageSearchQuery !== '') {
      this.props.onfetchMessageSearchResults(this.state.messageSearchQuery);
    }
  }

  render() {
    let searchIconStyling = {
      backgroundImage: `url('${searchIcon}')`
    };

    return (
      <div className={styles.MessageSearchBar}>
        <input
          className={styles.Input}
          type="text"
          value={this.state.messageSearchQuery}
          placeholder="Search"
          onChange={this.onMessageSearchChange}
          onKeyPress={this.onMessageSearchKeypress}
        />
        <div className={styles.SearchIcon} style={searchIconStyling}></div>
      </div>
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
