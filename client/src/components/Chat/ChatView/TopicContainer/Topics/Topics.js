import React from 'react';

import './Topics.css';
import plusSmall from '../../../../../assets/images/plus_small.svg';
import Topic from './Topic/Topic';

const topics = (props) => {
  return (
    <div className="Topics">
      <div>
        <div className="Topics-title">TOPICS</div>
        <div className="Topics-add-container">
          <img className="Topics-add" src={plusSmall} alt="Create Topic" />
        </div>
        <div className="Topics-clearfix"></div>
      </div>
      <Topic />
      <Topic />
      <Topic />
      <Topic />
    </div>
  );
};

export default topics;