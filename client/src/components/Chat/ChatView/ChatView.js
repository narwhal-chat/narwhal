import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './ChatView.css';
import PodContainer from './PodContainer/PodContainer';
import TopicContainer from './TopicContainer/TopicContainer';
import MessageContainer from './MessageContainer/MessageContainer';
import DiscoverContainer from './DiscoverContainer/DiscoverContainer';
import DiscoverCategoriesContainer from './DiscoverCategoriesContainer/DiscoverCategoriesContainer';
import CreateJoinModal from '../../UI/CreateJoinModal/CreateJoinModal';
import CreateTopicModal from '../../UI/CreateTopicModal/CreateTopicModal';
import EditProfileModal from '../../UI/EditProfileModal/EditProfileModal';

class ChatView extends Component {
	state = {
		showCreateJoinModal: false,
		showCreateTopicModal: false,
		showEditProfileModal: false,
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

  openEditProfileModal() {
    console.log('opened');
		this.setState({ showEditProfileModal: true });
	}

	closeEditProfileModal() {
		this.setState({ showEditProfileModal: false });
	}

	render() {
		let currentView = null;

		if (this.props.match.params.podId === '@discover') {
			currentView = (
				<div className={styles.ChatView}>
					<PodContainer openCreateJoinModal={this.openCreateJoinModal.bind(this)} />
					<DiscoverCategoriesContainer openEditProfileModal={this.openEditProfileModal.bind(this)}/>
					<DiscoverContainer />
					<CreateJoinModal
						isOpen={this.state.showCreateJoinModal}
						onRequestClose={this.closeCreateJoinModal.bind(this)}
					/>
					<CreateTopicModal
						isOpen={this.state.showCreateTopicModal}
						onRequestClose={this.closeCreateTopicModal.bind(this)}
					/>
					<EditProfileModal
						isOpen={this.state.showEditProfileModal}
						onRequestClose={this.closeEditProfileModal.bind(this)}
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
            openEditProfileModal={this.openEditProfileModal.bind(this)}
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
					<EditProfileModal
						isOpen={this.state.showEditProfileModal}
						onRequestClose={this.closeEditProfileModal.bind(this)}
					/>
				</div>
			);
		}

		return currentView;
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(ChatView);
