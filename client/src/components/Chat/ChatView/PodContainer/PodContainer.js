import React, { Component } from 'react';

import './PodContainer.css';
import narwhalLogo from '../../../../assets/images/narwhal.png';
import Pods from './Pods/Pods';
import AddPod from './AddPod/AddPod';

class PodContainer extends Component {
  render () {
    return (
      <div className="PodContainer">
        <img className="PodContainer-logo" src={narwhalLogo} alt="Discover"/>
        <div className="PodContainer-discover">DISCOVER</div>
        <div className="PodContainer-discover-line"></div>
        <Pods />
        <AddPod />
      </div>
    );
  }
}

export default PodContainer;