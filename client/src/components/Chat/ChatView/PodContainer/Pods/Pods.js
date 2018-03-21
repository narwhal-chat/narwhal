import React from 'react';

import Pod from './Pod/Pod';

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
    <React.Fragment>
      {pods}
    </React.Fragment>
  );
};

export default pods;
