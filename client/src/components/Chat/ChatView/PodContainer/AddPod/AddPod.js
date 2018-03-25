import React from 'react';
import PlusIcon from 'react-icons/lib/io/ios-plus-empty';

import styles from './AddPod.css';

const addPod = (props) => {
  return (
    <div className={styles.AddPod}>
      <PlusIcon size="70%" />
    </div>
  );
};

export default addPod;
