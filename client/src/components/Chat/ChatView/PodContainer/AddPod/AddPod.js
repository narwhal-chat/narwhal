import React from 'react';

import styles from './AddPod.css';
import plusThin from '../../../../../assets/images/plus-thin.svg';

const addPod = (props) => {
  return (
    <div className={styles.AddPod}>
      <img className={styles.PlusThin} src={plusThin} alt="Create or Join" />
    </div>
  );
};

export default addPod;