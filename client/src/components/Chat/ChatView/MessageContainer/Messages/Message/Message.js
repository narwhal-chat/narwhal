import React from 'react';

import styles from './Message.css';

const message = (props) => {
  return (
    <div className={styles.Message}>
      <img className={styles.Avatar} src="https://pre00.deviantart.net/e4d4/th/pre/i/2013/030/6/9/poring_by_aliazanetsu-d5t89bq.png" alt="Username" />
      <div className={styles.MessageContent}>
        <div className={styles.Username}>
          narwhal_user12
        </div>
        <div className={styles.Time}>
          6:30 PM
        </div>
        <div className={styles.MessageText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat yooo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className={styles.MessageSeparator}></div>
    </div>
  );
};

export default message;
