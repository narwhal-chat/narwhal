import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './TopicContainer.css';
import PodHeader from './PodHeader/PodHeader';
import User from '../../../Shared/User/User';
import Topics from './Topics/Topics';
import * as actions from '../../../../store/actions/index';

class TopicContainer extends Component {
  componentDidMount() {
    this.props.onFetchTopics(this.props.initialPodId, this.props.initialTopicId);
  }

  render() {
    let podHeader = null;
    let topics = null;

    if (this.props.activePod && this.props.topics && this.props.activeTopic) {
      podHeader = (
        <PodHeader
          name={this.props.activePod.display_name}
        />
      );

      topics = (
        <Topics
          topics={this.props.topics}
          activeTopic={this.props.activeTopic}
          clickedTopic={this.props.onTopicClicked}
          // clickedAddTopic={this.props.onCreateTopic}
          openTopicModal={this.props.openTopicModal}
        />
      );
    }

    return (
      <div className={styles.TopicContainer}>
        <div className={styles.Content}>
          {podHeader}
          <User />
          {topics}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topics: state.chat.topics,
    activePod: state.chat.activePod,
    activeTopic: state.chat.activeTopic
  };
};

const mapDispatchToProps = dispatch => {
  return {

      onFetchTopics: (podId) => dispatch(actions.fetchTopics(podId)),
      // onCreateTopic: () => dispatch(actions.createTopic()),
      onTopicClicked: (topic) => dispatch(actions.topicClicked(topic))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
