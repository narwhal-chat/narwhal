import React from 'react';

import styles from './PodHeader.css';

const podHeader = (props) => {
  return (
    <div className={styles.PodHeader}>{props.name.length > 14 ? props.name.substring(0, 14) + '...' : props.name}</div>
  );
};

export default podHeader;
