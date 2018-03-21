import React, { Component } from 'react';

import styles from './DiscoverCategoriesContainer.css';
import DiscoverCategories from './DiscoverCategories/DiscoverCategories';
import User from '../../../Shared/User/User';

class DiscoverCategoriesContainer extends Component {
	render() {
		return (
			<div className={styles.DiscoverCategoriesContainer}>
				<div className={styles.Content}>
					<div className={styles.Header}>Discover</div>
					<User />
					<DiscoverCategories />
				</div>
			</div>
		);
	}
}

export default DiscoverCategoriesContainer;
