import React from 'react';
import styles from './ProfileContainer.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileContainer = () => {
  return(
    <div className={styles.ProfileContainer}>
      <ProfileHeader />
      <ProfileInfo />
    </div>
  )
}

export default ProfileContainer;