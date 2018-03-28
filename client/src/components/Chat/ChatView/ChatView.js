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
import CreateTopicModal from '../../UI/CreateTopicModal/CreateTopicModal';

class ChatView extends Component {
	state = {
		showCreateJoinModal: false,
		showCreateTopicModal: false,
	};

	openCreateTopicModal() {
		this.setState({ showCreateTopicModal: true });
	}

	closeCreateTopicModal() {
		this.setState({ showCreateTopicModal: false });
	}

	openCreateJoinModal() {
		this.setState({ showCreateJoinModal: true });
	}

	closeCreateJoinModal() {
		this.setState({ showCreateJoinModal: false });
	}

	render() {
		// let currentView = <div className={styles.ChatView}>
		// 	<PodContainer openModal={this.openCreateJoinModal}/>
		// 	<DiscoverCategoriesContainer />
		// 	<DiscoverContainer />
		// 	<CreateJoinModal isOpen={this.state.showCreateJoinModal} onRequestClose={this.closeCreateJoinModal}/>
		// </div>;
		let currentView = null;

		if (this.props.match.params.podId === '@discover') {
			currentView = (
				<div className={styles.ChatView}>
					<PodContainer openCreateJoinModal={this.openCreateJoinModal.bind(this)} />
					<DiscoverCategoriesContainer />
					<DiscoverContainer />
					<CreateJoinModal
						isOpen={this.state.showCreateJoinModal}
						onRequestClose={this.closeCreateJoinModal.bind(this)}
					/>
          <CreateTopicModal
            isOpen={this.state.showCreateTopicModal}
            onRequestClose={this.closeCreateTopicModal.bind(this)}
          />
				</div>
			);
		} else {
			currentView = (
				<div className={styles.ChatView}>
					<PodContainer
						initialPodId={this.props.match.params.podId}
						openCreateJoinModal={this.openCreateJoinModal.bind(this)}
					/>
					<TopicContainer
						initialPodId={this.props.match.params.podId}
            initialTopicId={this.props.match.params.topicId}
            openTopicModal={this.openCreateTopicModal.bind(this)}
					/>
					<MessageContainer />
					<CreateJoinModal
						isOpen={this.state.showCreateJoinModal}
						onRequestClose={this.closeCreateJoinModal.bind(this)}
					/>
          <CreateTopicModal
            isOpen={this.state.showCreateTopicModal}
            onRequestClose={this.closeCreateTopicModal.bind(this)}
          />
				</div>
			);
		}

		return currentView;
	}
}

const mapStateToProps = state => {
	return { 
    
  };
};

export default connect(mapStateToProps)(ChatView);
