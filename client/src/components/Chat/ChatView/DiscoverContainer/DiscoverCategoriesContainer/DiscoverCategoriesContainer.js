import React, { Component } from 'react';

import styles from './DiscoverCategoriesContainer.css';
import DiscoverCategories from './DiscoverCategories/DiscoverCategories';

class DiscoverCategoriesContainer extends Component {
	render() {
		return (
			<div className={styles.DiscoverCategoriesContainer}>
				<div className={styles.Content}>
					<DiscoverCategories />
				</div>
			</div>
		);
	}
}

export default DiscoverCategoriesContainer;
