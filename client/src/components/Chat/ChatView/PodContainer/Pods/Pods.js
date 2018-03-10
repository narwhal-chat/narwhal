import React from 'react';

import Pod from './Pod/Pod';

const pods = (props) => {
  return (
    <React.Fragment>
      <Pod />
      <Pod />
      <Pod />
      <Pod />
      <Pod />
    </React.Fragment>
  );
};

export default pods;