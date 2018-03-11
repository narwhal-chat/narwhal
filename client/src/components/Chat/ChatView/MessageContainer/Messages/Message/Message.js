import React from 'react';

import styles from './Message.css';

const message = (props) => {
  return (
    <div className={styles.Message}>
      <div className={styles.AvatarContainer}>
        <div className={styles.Avatar}></div>
      </div>
      <div className={styles.MessageContent}>
        <div className={styles.Username}>
          narwhal_user1
        </div>
        <div className={styles.Time}>
          6:30pm
        </div>
        <div className={styles.MessageText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
  ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
  ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default message;