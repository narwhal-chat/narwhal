import React, { Component } from 'react';

import styles from './DiscoverCategoriesContainer.css';
import DiscoverCategories from './DiscoverCategories/DiscoverCategories';
import User from '../../../Shared/User/User';

class DiscoverCategoriesContainer extends Component {
	render() {
		return (
			<div className={styles.DiscoverCategoriesContainer}>
				{console.log(this)}
				<div className={styles.Content}>
					<div className={styles.Header}>Discover</div>
					<User openModal={this.props.openEditProfileModal}/>
					<DiscoverCategories />
				</div>
			</div>
		);
	}
}

export default DiscoverCategoriesContainer;
