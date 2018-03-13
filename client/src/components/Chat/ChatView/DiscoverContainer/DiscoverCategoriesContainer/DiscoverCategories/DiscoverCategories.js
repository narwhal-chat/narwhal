import React from 'react';

import styles from './DiscoverCategories.css';
import discoverCategory from './DiscoverCategory/DiscoverCategory';


const DiscoverCategories = props => {
	return(
          <div className={styles.Categories}>
            <div className={styles.Header}>Discover</div>
            <p>hello</p>
            <discoverCategory />
          </div>
        ) 
};

export default DiscoverCategories;
