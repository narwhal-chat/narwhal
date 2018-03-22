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
    let currentView = <div className={styles.ChatView}>
			<PodContainer />
			<DiscoverCategoriesContainer />
			{/* <DiscoverContainer /> */}
			<CreateJoinModal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal.bind(this)}/>
		</div>;

    if (!this.props.isDiscoverActive) {
      currentView = (
        <div className={styles.ChatView}>
          <PodContainer />
          <TopicContainer />
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
