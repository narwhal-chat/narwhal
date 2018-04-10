import React from 'react';

import styles from './DiscoverCategory.css';

const DiscoverCategory = props => {
  let categoryName = null;
  if (props.activeCategory === props.category.name) {
    categoryName = [styles.Category, styles.Active].join(' ');
  } else {
    categoryName = styles.Category;
  }

	return(
    <div 
      className={categoryName}>
      <div className={styles.CategoryName} value={props.category.name} onClick={() => props.categoryClick(props.category.name)}># {props.category.name.toLowerCase()}</div>
    </div>
  )
};

export default DiscoverCategory;
