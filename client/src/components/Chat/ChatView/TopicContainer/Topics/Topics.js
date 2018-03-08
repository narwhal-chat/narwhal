import React from 'react';

import './Topics.css';
import plusSmall from '../../../../../assets/images/plus_small.svg';

const topics = (props) => {
  return (
    <div className="Topics">
      <div>
        <div className="Topics-title">TOPICS</div>
        <div className="Topics-add-container">
          <img className="Topics-add" src={plusSmall} alt="Create Topic" />
        </div>
      </div>
    </div>
  );
};

export default topics;