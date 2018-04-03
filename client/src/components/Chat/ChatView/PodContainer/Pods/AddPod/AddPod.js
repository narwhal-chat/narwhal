import React from 'react';
import PlusIcon from 'react-icons/lib/io/ios-plus-empty';

import styles from './AddPod.css';

const addPod = (props) => {
  return (
    <div onClick={props.openModal} className={styles.AddPod}>
      <PlusIcon size="80%" />
    </div>
  );
};

export default addPod;
