import React from 'react';

import styles from './DiscoverCategories.css';
import DiscoverCategory from './DiscoverCategory/DiscoverCategory';


const DiscoverCategories = (props) => {
	return(
		<div className={styles.Categories}>
			<div className={styles.Title}>Categories</div>
			<div className={styles.Clearfix}></div>
				<DiscoverCategory activeCategory={props.activeCategory} category={{name: 'trending'}} categoryClick={props.categoryClick}/>
			{props.categories.map((categoryData) => {
				return <DiscoverCategory key={categoryData.id} activeCategory={props.activeCategory} category={categoryData} categoryClick={props.categoryClick}/>
			})}
		</div>
	)
};

export default DiscoverCategories;
