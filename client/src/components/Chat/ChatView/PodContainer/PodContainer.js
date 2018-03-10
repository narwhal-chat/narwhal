import React, { Component } from 'react';

import styles from './PodContainer.css';
import narwhalLogo from '../../../../assets/images/narwhal.png';
import Pods from './Pods/Pods';
import AddPod from './AddPod/AddPod';

class PodContainer extends Component {
  
  render () {
    return (
      <div className={styles.PodContainer}>
        <img className={styles.Logo} src={narwhalLogo} alt="Discover"/>
        <div className={styles.Discover}>DISCOVER</div>
        <div className={styles.DiscoverSeparator}></div>
        <Pods />
        <AddPod />
      </div>
    );
  }
}

export default PodContainer;