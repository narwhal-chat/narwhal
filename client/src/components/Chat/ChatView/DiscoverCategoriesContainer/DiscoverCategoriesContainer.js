import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './DiscoverCategoriesContainer.css';
import DiscoverCategories from './DiscoverCategories/DiscoverCategories';
import User from '../../../Shared/User/User';
import * as actions from '../../../../store/actions/index';

class DiscoverCategoriesContainer extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}
	render() {
		return (
			<div className={styles.DiscoverCategoriesContainer}>
			{console.log('categories', this.props.categories)}
				<div className={styles.Content}>
					<div className={styles.Header}>Discover</div>
					<User openModal={this.props.openEditProfileModal}/>
					<DiscoverCategories />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		categories: state.chat.categories
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchCategories: () => dispatch(actions.fetchCategories())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverCategoriesContainer);
