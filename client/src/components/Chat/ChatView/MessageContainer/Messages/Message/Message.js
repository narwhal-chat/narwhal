import React from 'react';

import styles from './Message.css';

const message = (props) => {
  return (
    <div className={styles.Message}>
      <img
        className={styles.Avatar}
        src="https://pre00.deviantart.net/e4d4/th/pre/i/2013/030/6/9/poring_by_aliazanetsu-d5t89bq.png"
        alt="Username"
        draggable="false"
      />
      <div className={styles.MessageContent}>
        <div className={styles.Username}>
          narwhal_user12
        </div>
        <div className={styles.Time}>
          6:30 PM
        </div>
        <div className={styles.MessageText}>
          {props.message}
        </div>
      </div>
      <div className={styles.MessageSeparator}></div>
    </div>
  );
};

export default message;
