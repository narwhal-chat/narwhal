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

	onCategoryClick(category) {
		console.log('hello', category)
		this.props.categoryClicked(category)
	}

	render() {

		return (
			<div className={styles.DiscoverCategoriesContainer}>
				<div className={styles.Content}>
					<div className={styles.Header}>Discover</div>
					<User openModal={this.props.openEditProfileModal}/>
					<DiscoverCategories categoryClick={this.onCategoryClick.bind(this)} categories={this.props.categories} discover={this.props.discover}/>
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
		fetchCategories: () => dispatch(actions.fetchCategories()),
		categoryClicked: (category) => dispatch(actions.categoryClicked(category))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverCategoriesContainer);
