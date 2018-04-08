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
    let topicContainer = null;

    if (this.props.topics && this.props.activePod && this.props.topics && this.props.activeTopic) {
      topicContainer = (
        <div className={styles.Content}>
          <PodHeader
            name={this.props.activePod.display_name}
          />
          <User
            openModal={this.props.openEditProfileModal}
          />
          <Topics
            topics={this.props.topics}
            activeTopic={this.props.activeTopic}
            clickedTopic={this.props.onTopicClicked}
            openTopicModal={this.props.openTopicModal}
          />
        </div>
      );
    }

    return (
      <div className={styles.TopicContainer}>
        {topicContainer}
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

      onFetchTopics: (podId, initialTopicId) => dispatch(actions.fetchTopics(podId, initialTopicId)),
      onTopicClicked: (topic) => dispatch(actions.topicClicked(topic))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
