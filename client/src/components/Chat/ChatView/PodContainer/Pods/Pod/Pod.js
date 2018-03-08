import React from 'react';

import './Pod.css';
import kitten from '../../../../../../assets/images/kitten.jpeg';

const pod = (props) => {
  return (
    <img className="Pod" src={kitten} />
  );
};

export default pod;