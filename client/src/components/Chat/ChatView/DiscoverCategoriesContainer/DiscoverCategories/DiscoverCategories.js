import React from 'react';

import styles from './DiscoverCategories.css';
import DiscoverCategory from './DiscoverCategory/DiscoverCategory';


const DiscoverCategories = (props) => {
	return(
		<div className={styles.Categories}>
			<div className={styles.Title}>Categories</div>
			<div className={styles.Clearfix}></div>
			<DiscoverCategory />
			<DiscoverCategory />
			<DiscoverCategory />
			<DiscoverCategory />
			<DiscoverCategory />
		</div>
	)
};

export default DiscoverCategories;
