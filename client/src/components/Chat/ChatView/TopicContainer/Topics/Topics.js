import React from 'react';

import styles from './Topics.css';
import PlusIcon from 'react-icons/lib/io/android-add';
import Topic from './Topic/Topic';

const topics = (props) => {
  let topics = props.topics.map((topic) => {
    return (
      <Topic
        key={topic.id}
        topic={topic}
      />
    );
  });

  return (
    <div className={styles.Topics}>
      <div>
        <div className={styles.Title}>TOPICS</div>
        <div className={styles.AddTopicContainer}>
          <PlusIcon
            className={styles.AddTopicIcon}
            onClick={props.clickedAddTopic}
          />
          {/* <img
            className={styles.AddTopic}
            src={plusSmall}
            alt="Create Topic"
            onClick={props.clickedAddTopic}
          /> */}
        </div>
        <div className={styles.Clearfix}></div>
      </div>
      {topics}
    </div>
  );
};

export default topics;