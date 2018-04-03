import React from 'react';

import styles from './DiscoverCategory.css';

const DiscoverCategory = props => {
	return(
    <div 
      className={styles.Category}>
      <div className={styles.CategoryName}># {props.category.name}</div>
    </div>
  )
};

export default DiscoverCategory;
