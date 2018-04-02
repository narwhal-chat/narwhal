import React from 'react';
import styles from './Result.css';

const result = (props) => {
  return(
			<div className={styles.Result}>
				<div className={styles.PodAvatar} />
				<div className={styles.PodInfo}>
					<div className={styles.PodName}>Narwhals Rule</div>
					<div className={styles.PodCategory}>Social</div>
				</div>
				<div className={styles.UserCount}>1023 users</div>
				<div className={styles.PodDescription}>
					A community where we talk about all the cool things that narwhal's do.A community where we talk about
					all the cool things that narwhal's doA community where we talk about all the cool things that
					narwhal's do
				</div>
				<button className={styles.Button}>Join</button>
			</div>
	)
}

export default result;