import React from 'react';
import styles from './ProfileInfo.css';

const ProfileInfo = () => {
  return <div className={styles.Profile}>
			<div className={styles.ProfileInfo}>
				<div className={styles.ProfileText}>Username</div>
				<input className={styles.ProfileInput} />
			</div>
			<div className={styles.ProfileInfo}>
				<div className={styles.ProfileText}>E-mail Address</div>
				<input className={styles.ProfileInput} />
			</div>
			<div className={styles.ProfileInfo}>
				<div className={styles.ProfileText}>Password</div>
				<input className={styles.ProfileInput} />
			</div>
			<div className={styles.ProfileInfo}>
				<div className={styles.ProfileText}>Confirm Password</div>
				<input className={styles.ProfileInput} />
			</div>
      <div className={styles.Buttons}>
        <button className={styles.ButtonUpdate}>Update</button>
        <button className={styles.ButtonCancel}>Cancel</button>
      </div>
		</div>;
}

export default ProfileInfo;