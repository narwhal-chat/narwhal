import React from 'react';

import './AddPod.css';
import plusThin from '../../../../../assets/images/plus-thin.svg';

const addPod = (props) => {
  return (
    <div className="AddPod">
      <img className="AddPod-plus-thin" src={plusThin} alt="Create or Join" />
    </div>
  );
};

export default addPod;