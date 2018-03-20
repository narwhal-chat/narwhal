import React from 'react';

import styles from './Pod.css';

const pod = (props) => {
  let podStyle = [styles.Avatar, styles.Inactive].join(' ');

  // If the pod is currently selected
  if (props.activePod !== null) {
    if (props.activePod.id === props.pod.id) {
      podStyle = [styles.Avatar, styles.Active].join(' ');
    }
  }

  return (
    <div className={styles.Pod}>
      <img 
        className={podStyle}
        src={props.pod.avatar} 
        alt={props.pod.display_name}
        onClick={() => props.clicked(props.pod)}
      />
    </div>
  );
};

export default pod;
