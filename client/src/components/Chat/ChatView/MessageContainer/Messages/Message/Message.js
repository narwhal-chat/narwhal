import React from 'react';

import styles from './Message.css';

const message = (props) => {
  // Set the avatar styling
  let avatar = {
    backgroundImage: `url('https://pre00.deviantart.net/e4d4/th/pre/i/2013/030/6/9/poring_by_aliazanetsu-d5t89bq.png')`
  };

  return (
    <div className={styles.Message}>
      <div
        className={styles.Avatar}
        style={avatar}
        draggable="false">
      </div>
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
