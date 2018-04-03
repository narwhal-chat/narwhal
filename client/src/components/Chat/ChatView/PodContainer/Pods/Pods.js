import React from 'react';

import styles from './Pods.css';
import Pod from './Pod/Pod';
import AddPod from './AddPod/AddPod';

const pods = (props) => {
  let pods = props.pods.map((pod) => {
    return (
      <Pod
        key={pod.id}
        pod={pod}
        clicked={props.podClicked}
        activePod={props.activePod}
      />
    );
  });
  return (
    <div className={styles.Pods}>
      {pods}
      <AddPod 
        openModal={props.openCreateJoinModal}
      />
    </div>
  );
};

export default pods;
