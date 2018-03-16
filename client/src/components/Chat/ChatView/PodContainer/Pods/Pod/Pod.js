import React from 'react';

import styles from './Pod.css';

const pod = (props) => {
  return (
    <div className={styles.Pod}>
      <img 
        className={styles.Avatar}
        src={props.pod.avatar} 
        alt={props.pod.display_name}
      />
    </div>
  );
};

export default pod;