import React from 'react';
import moment from 'moment';

import styles from './MessageSearchResult.css';

const messageSearchResult = (props) => {
  let avatar = {
    backgroundImage: `url('${props.messageSearchResult.avatar}')`
  }

  return (
    <div className={styles.MessageSearchResult}>
      <div
        className={styles.Avatar}
        style={avatar}
        draggable="false">
      </div>
      <div className={styles.MessageContent}>
        <div className={styles.Username}>
          {props.messageSearchResult.username}
        </div>
        <div className={styles.Time}>
          {moment(props.messageSearchResult.create_date).calendar()}
        </div>
        <div className={styles.MessageText}>
          {props.messageSearchResult.message_text}
        </div>
      </div>
      <div className={styles.MessageSeparator}></div>
    </div>
  );
};

export default messageSearchResult;
