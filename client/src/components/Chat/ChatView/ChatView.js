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
    showModal: true
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
<<<<<<< HEAD
    let currentView = <div className={styles.ChatView}>
			<PodContainer />
			<DiscoverCategoriesContainer />
			{/* <DiscoverContainer /> */}
			<CreateJoinModal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal.bind(this)}/>
		</div>;

    if (!this.props.isDiscoverActive) {
=======
    console.log('chat view', this.props);
    let currentView = null;
    
    if (this.props.match.params.podId === '@discover') {
>>>>>>> Commit progress on changing the intitial flow to use URL params
      currentView = (
        <div className={styles.ChatView}>
          <PodContainer />
          <DiscoverCategoriesContainer />
          <DiscoverContainer />
        </div>
      );
     } else {
       console.log(this.props.match.params);
      currentView = (
        <div className={styles.ChatView}>
          <PodContainer
            initialPodId={this.props.match.params.podId}
          />
          <TopicContainer
            initialPodId={this.props.match.params.podId}
            initialTopicId={this.props.match.params.topicId}
          />
          <MessageContainer />
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
