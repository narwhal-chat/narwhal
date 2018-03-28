import React from 'react';
import ReactTooltip from 'react-tooltip';

import styles from './Topics.css';
import PlusIcon from 'react-icons/lib/io/android-add';
import Topic from './Topic/Topic';

const topics = (props) => {
  let activeTopic = null;

  if (props.activeTopic === null) {
    activeTopic = props.topics[0];
  } else {
    activeTopic = props.activeTopic;
  }

  let topics = props.topics.map((topic) => {
    if (activeTopic.id === topic.id) {
      return (
        <Topic
          key={topic.id}
          topic={topic}
          isActiveTopic={true}
          clicked={props.clickedTopic}
        />
      );
    } else {
      return (
        <Topic
          key={topic.id}
          topic={topic}
          isActiveTopic={false}
          clicked={props.clickedTopic}
        />
      );
    }
  });

  return (
    <div className={styles.Topics}>
      <div>
        <div className={styles.Title}>Topics</div>
        <div className={styles.AddTopicContainer}>
          <PlusIcon
            className={styles.AddTopicIcon}
            onClick={props.openTopicModal}
            data-tip
            data-for="Create Topic"
          />
          <ReactTooltip
            id="Create Topic"
            place="top"
            type="dark"
            effect="solid">
            <span>Create Topic</span>
          </ReactTooltip>
        </div>
        <div className={styles.Clearfix}></div>
      </div>
      {topics}
    </div>
  );
};

export default topics;
