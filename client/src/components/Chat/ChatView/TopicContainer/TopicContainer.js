import React, { Component } from 'react';

import './TopicContainer.css';
import PodHeader from './PodHeader/PodHeader';
import Topics from './Topics/Topics';

class TopicContainer extends Component {
  render() {
    return (
      <div className="TopicContainer">
        <div className="TopicContainer-content">
          <PodHeader />
          <Topics />
        </div>
      </div>
    );
  }
}

export default TopicContainer;