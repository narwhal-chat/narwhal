import React, { Component } from 'react';

import styles from './TopicContainer.css';
import PodHeader from './PodHeader/PodHeader';
import User from '../../../Shared/User/User';
import Topics from './Topics/Topics';

class TopicContainer extends Component {
  render() {
    return (
      <div className={styles.TopicContainer}>
        <div className={styles.Content}>
          <PodHeader />
          <User />
          <Topics />
        </div>
      </div>
    );
  }
}

export default TopicContainer;