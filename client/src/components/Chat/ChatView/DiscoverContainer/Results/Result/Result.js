import React from 'react';
import styles from './Result.css';

const result = (props) => {
  return(
			<div className={styles.Result}>
				<div className={styles.PodAvatar} />
				<div className={styles.PodInfo}>
					<div className={styles.PodName}>{props.result.display_name}</div>
					<div className={styles.PodCategory}>{props.result.pod_category_name}</div>
				</div>
				<div className={styles.UserCount}>{props.result.user_count} user</div>
				<div className={styles.PodDescription}>
					{props.result.description}
				</div>
				<button onClick={() => props.joinPod(props.result.id)} className={styles.Button}>Join</button>
			</div>
	)
}

export default result;