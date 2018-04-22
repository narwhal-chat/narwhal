import React from 'react';
import firstBy from 'thenby';

import styles from './Pods.css';
import Pod from './Pod/Pod';
import AddPod from './AddPod/AddPod';

const pods = (props) => {
  let pods = null;

  if (props.pods.length) {
    pods = props.pods
      .sort(
        firstBy((a, b) => new Date(a.join_date) - new Date(b.join_date))
          .thenBy((a, b) => a.id - b.id)
      )
      .map((pod) => {
        return (
          <Pod
            key={pod.id}
            pod={pod}
            clicked={props.podClicked}
            activePod={props.activePod}
          />
        );
      });
  }
  
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
