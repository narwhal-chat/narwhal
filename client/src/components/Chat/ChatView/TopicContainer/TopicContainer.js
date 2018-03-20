import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './TopicContainer.css';
import PodHeader from './PodHeader/PodHeader';
import User from '../../../Shared/User/User';
import Topics from './Topics/Topics';
import * as actions from '../../../../store/actions/index';

class TopicContainer extends Component {
  componentDidMount() {
    // this.props.onFetchTopics(this.props.activePod.id);
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.TopicContainer}>
        <div className={styles.Content}>
          <PodHeader />
          <User />
          <Topics
            topics={this.props.topics}
            clickedAddTopic={this.props.onCreateTopic}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topics: state.chat.topics,
    activePod: state.chat.activePod
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchTopics: (podId) => dispatch(actions.fetchTopics(podId)),
      onCreateTopic: () => dispatch(actions.createTopic())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
