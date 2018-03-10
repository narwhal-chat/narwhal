import React from 'react';

import styles from './Topics.css';
import plusSmall from '../../../../../assets/images/plus_small.svg';
import Topic from './Topic/Topic';

const topics = (props) => {
  return (
    <div className={styles.Topics}>
      <div>
        <div className={styles.Title}>TOPICS</div>
        <div className={styles.AddTopicContainer}>
          <img className={styles.AddTopic} src={plusSmall} alt="Create Topic" />
        </div>
        <div className={styles.Clearfix}></div>
      </div>
      <Topic />
      <Topic />
      <Topic />
      <Topic />
    </div>
  );
};

export default topics;