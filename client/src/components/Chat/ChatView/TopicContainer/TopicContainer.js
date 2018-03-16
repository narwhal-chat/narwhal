import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './TopicContainer.css';
import PodHeader from './PodHeader/PodHeader';
import User from '../../../Shared/User/User';
import Topics from './Topics/Topics';
import * as actions from '../../../../store/actions/index';

class TopicContainer extends Component {
  componentDidMount() {
    this.props.onFetchTopics();
  }

  render() {
    return (
      <div className={styles.TopicContainer}>
        <div className={styles.Content}>
          <PodHeader />
          <User />
          <Topics
            topics={this.props.topics}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topics: state.chat.topics
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchTopics: () => dispatch(actions.fetchTopics(1))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);