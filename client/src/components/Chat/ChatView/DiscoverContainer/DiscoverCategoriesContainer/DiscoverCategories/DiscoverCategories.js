import React from 'react';

import styles from './DiscoverCategories.css';
import DiscoverCategory from './DiscoverCategory/DiscoverCategory';


const DiscoverCategories = (props) => {
	return <div className={styles.Categories}>
			<DiscoverCategory />
			<DiscoverCategory />
			<DiscoverCategory />
			<DiscoverCategory />
			<DiscoverCategory />
		</div>; 
};

export default DiscoverCategories;
