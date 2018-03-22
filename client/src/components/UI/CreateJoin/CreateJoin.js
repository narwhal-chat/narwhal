import React, { Component } from 'react';
import styles from './CreateJoin.css';
import Create from '../Create/Create'
import PodContainer from '../../Chat/ChatView/PodContainer/PodContainer'
import DiscoverCategoriesContainer from '../../Chat/ChatView/DiscoverCategoriesContainer/DiscoverCategoriesContainer';
import DiscoverContainer from '../../Chat/ChatView/DiscoverContainer/DiscoverContainer'



class createJoin extends Component {
	state = {
		showModal: false,
		showJoin: false
	};

	componentDidMount() {
		console.log('this', this);
  }
  
	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}
	createClick = () => {
    console.log('this', this);
    
    this.setState({ showModal: true });
    // this.props.closeModal();
	};

	joinClick = () => {
		this.setState({ showJoin: true });
	};

	render() {
		if (this.state.showModal) {
			return <Create isOpen={this.state.showModal} onRequestClose={this.handleCloseModal.bind(this)}/>;
		}

		if (this.state.showJoin) {
			return (
				<div className={styles.ChatView}>
					<PodContainer />
					<DiscoverCategoriesContainer />
					<DiscoverContainer />
				</div>
			);
		}

		return (
			<div className={styles.CreateJoin}>
				<div className={styles.Create} onClick={this.createClick}>
					<div>CREATE</div>
				</div>
				<div className={styles.Join} onClick={this.joinClick}>
					<div>JOIN</div>
				</div>
			</div>
		);
	}
};

export default createJoin;