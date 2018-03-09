import React, { Component } from 'react';

import './PodContainer.css';
import narwhalLogo from '../../../../assets/images/narwhal.png';

class PodContainer extends Component {
  render () {
    return (
      <div className="PodContainer">
        <img className="PodContainer-logo" src={narwhalLogo} />
        <div className="PodContainer-discover">DISCOVER</div>
        <div className="PodContainer-discover-line"></div>
      </div>
    );
  }
}

export default PodContainer;