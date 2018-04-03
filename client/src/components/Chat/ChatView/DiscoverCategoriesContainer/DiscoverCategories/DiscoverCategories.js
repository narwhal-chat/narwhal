import React from 'react';

import styles from './DiscoverCategories.css';
import DiscoverCategory from './DiscoverCategory/DiscoverCategory';


const DiscoverCategories = (props) => {
	return(
		<div className={styles.Categories}>
			<div className={styles.Title}>Categories</div>
			<div className={styles.Clearfix}></div>
			{props.categories.map((categoryData) => {
				return <DiscoverCategory id={categoryData.id} category={categoryData}/>
			})}
		</div>
	)
};

export default DiscoverCategories;
