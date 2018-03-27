import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './ChatView.css';
import PodContainer from './PodContainer/PodContainer';
import TopicContainer from './TopicContainer/TopicContainer';
import MessageContainer from './MessageContainer/MessageContainer';
import DiscoverContainer from './DiscoverContainer/DiscoverContainer';
import DiscoverCategoriesContainer from './DiscoverCategoriesContainer/DiscoverCategoriesContainer';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import EditPodContainer from './EditPodContainer/EditPodContainer';
import ChatModal from '../../UI/ChatModal/ChatModal';
import CreateJoinModal from '../../UI/CreateJoinModal/CreateJoinModal';

class ChatView extends Component {
  state = {
    showModal: false
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    // let currentView = <div className={styles.ChatView}>
		// 	<PodContainer openModal={this.handleOpenModal}/>
		// 	<DiscoverCategoriesContainer />
		// 	<DiscoverContainer />
		// 	<CreateJoinModal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}/>
    // </div>;
    let currentView = null;

    if (!this.props.isDiscoverActive) {
      currentView = (
        <div className={styles.ChatView}>
          <PodContainer openModal={this.handleOpenModal.bind(this)}/>
          <DiscoverCategoriesContainer />
          <DiscoverContainer />
          <CreateJoinModal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal.bind(this)}/>
        </div>
      );
     } else {
      currentView = (
        <div className={styles.ChatView}>
          <PodContainer
            initialPodId={this.props.match.params.podId}
            openModal={this.handleOpenModal.bind(this)}
          />
          <TopicContainer
            initialPodId={this.props.match.params.podId}
            initialTopicId={this.props.match.params.topicId}
          />
          <MessageContainer />
          <CreateJoinModal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal.bind(this)}/>
        </div>
      );
    }

    return currentView;
  }
}

const mapStateToProps = state => {
	return { 
    isDiscoverActive: state.chat.isDiscoverActive
  };
};

export default connect(mapStateToProps)(ChatView);
