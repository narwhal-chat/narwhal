import React from 'react';
import styles from './ProfileHeader.css';

const ProfileHeader = () => {
	return(
    <div className={styles.ProfileHeader}>
      <div className={styles.ProfileTitle}>
        EDIT PROFILE
      </div>
      <div className={styles.Logout}>
        LOG OUT
      </div>
    </div>
  )
};

export default ProfileHeader;
