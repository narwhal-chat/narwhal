import React from 'react';

import styles from './DiscoverContainerHeader.css';

const DiscoverContainerHeader = props => {
	return(
    <div className={styles.DiscoverContainerHeader}>
      <div className={styles.Heading}>
        <p className={styles.HeadingText}># trending</p>
      </div>
    </div>
  )
};

export default DiscoverContainerHeader;
