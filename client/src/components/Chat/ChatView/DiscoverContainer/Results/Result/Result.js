import React from 'react';
import styles from './Result.css';

const result = (props) => {
	let button = null;
	if(props.currentPods.filter(pod => pod.id === props.result.id).length > 0) {
		button = <button onClick={() => props.joinPod(props.result.id)} disabled className={styles.DisabledButton}>Joined</button>
	} else {
		button = <button onClick={() => props.joinPod(props.result.id)} className={styles.Button}>Join</button>;
	}

  // Set the avatar styling
  let avatar = {
		backgroundImage: `url('${props.result.avatar}')`
  }

  let avatarLetter = null;

  // If no avatar was provided, use a default background color with the first letter of the pod display name
  if (!props.result.avatar) {
    avatarLetter = (
      <div className={styles.AvatarLetter}>{props.result.display_name[0].toUpperCase()}</div>
    );
  }

  return(
			<div className={styles.Result}>
				<div className={styles.PodAvatar} style={avatar}>
					{avatarLetter}
					{console.log(props.result.avatar)}
				</div>
				<div className={styles.PodInfo}>
					<div className={styles.PodName}>{props.result.display_name}</div>
					<div className={styles.PodCategory}>{props.result.pod_category_name}</div>
				</div>
				<div className={styles.UserCount}>{props.result.user_count} user</div>
				<div className={styles.PodDescription}>
					{props.result.description}
				</div>
				{button}
			</div>
	)
}

export default result;