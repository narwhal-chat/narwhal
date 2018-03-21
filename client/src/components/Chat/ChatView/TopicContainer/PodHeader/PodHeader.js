import React from 'react';

import styles from './PodHeader.css';

const podHeader = (props) => {
  return (
    <div className={styles.PodHeader}>{props.name}</div>
  );
};

export default podHeader;
