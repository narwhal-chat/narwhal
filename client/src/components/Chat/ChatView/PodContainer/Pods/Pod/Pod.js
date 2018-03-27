import React from 'react';
import ReactTooltip from 'react-tooltip';

import styles from './Pod.css';

const pod = (props) => {
  // Default inactive pod styling
  let podStyling = [styles.Avatar, styles.Inactive].join(' ');

  // If the pod is currently selected
  if (props.activePod !== null) {
    if (props.activePod.id === props.pod.id) {
      podStyling = [styles.Avatar, styles.Active].join(' ');
    }
  }

  return (
    <div className={styles.Pod}>
      <img 
        className={podStyling}
        src={props.pod.avatar} 
        alt={props.pod.display_name}
        onClick={() => props.clicked(props.pod)}
        data-tip={props.pod.display_name}
      />
      <ReactTooltip place="right" type="dark" effect="solid" />
    </div>
  );
};

export default pod;
