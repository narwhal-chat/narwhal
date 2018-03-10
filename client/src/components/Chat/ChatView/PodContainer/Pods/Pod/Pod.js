import React from 'react';

import styles from './Pod.css';
import kitten from '../../../../../../assets/images/kitten.jpeg';

const pod = (props) => {
  return (
    <img className={styles.Pod} src={kitten} alt="Pod"/>
  );
};

export default pod;