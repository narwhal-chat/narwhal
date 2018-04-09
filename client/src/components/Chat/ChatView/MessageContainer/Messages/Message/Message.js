import React from 'react';
import moment from 'moment';

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
          {props.message.username}
        </div>
        <div className={styles.Time}>
          {moment(props.message.create_date).calendar()}
        </div>
        <div className={styles.MessageText}>
          {props.message.message_text}
        </div>
      </div>
      <div className={styles.MessageSeparator}></div>
    </div>
  );
};

export default message;
