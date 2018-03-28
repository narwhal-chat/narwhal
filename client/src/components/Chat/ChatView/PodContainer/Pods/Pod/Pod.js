import React from 'react';
import ReactTooltip from 'react-tooltip';

import styles from './Pod.css';

const pod = (props) => {
  // Default inactive pod styling
  let podStyling = [styles.Pod, styles.Inactive].join(' ');

  // If the pod is currently selected
  if (props.activePod !== null) {
    if (props.activePod.id === props.pod.id) {
      podStyling = [styles.Pod, styles.Active].join(' ');
    }
  }

  // Set the avatar styling
  let avatar = {
    backgroundImage: `url('${props.pod.avatar}')`
  }

  let avatarLetter = null;

  // If no avatar was provided, use a default background color with the first letter of the pod display name
  if (!props.pod.avatar) {
    avatarLetter = (
      <div className={styles.AvatarLetter}>{props.pod.display_name[0].toUpperCase()}</div>
    );
  }

  return (
    <React.Fragment>
      <div
        className={podStyling}
        style={avatar}
        onClick={() => props.clicked(props.pod)}
        draggable="false"
        data-tip
        data-for={'' + props.pod.id}>
        {avatarLetter}
      </div>
      <ReactTooltip
        id={'' + props.pod.id}
        place="right"
        type="dark"
        effect="solid">
        <span>{props.pod.display_name}</span>
      </ReactTooltip>
    </React.Fragment>
  );
};

export default pod;
