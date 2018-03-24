import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { headShake } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import styles from './PodContainer.css';
import narwhalLogo from '../../../../assets/images/narwhal.png';
import Pods from './Pods/Pods';
import AddPod from './AddPod/AddPod';
import * as actions from '../../../../store/actions/index';

const animationStyles = {
  headShake: {
    animation: 'x 1.25s',
    animationName: Radium.keyframes(headShake, 'headShake')
  }
};

class PodContainer extends Component {
  componentDidMount() {
    this.props.onFetchPods(this.props.initialPodId);
  }
  
  render() {
    let logoStyling = this.props.isDiscoverActive ? [styles.Logo, styles.Active].join(' ') : [styles.Logo, styles.Inactive].join(' ');

    return (
      <div className={styles.PodContainer}>
        <div className={styles.LogoContainer}>
          <StyleRoot>
            <img
              className={logoStyling}
              // style={narwhalLogoAnimation}
              src={narwhalLogo} alt="Discover"
              onClick={this.props.onDiscoverClicked}
            />
          </StyleRoot>
        </div>
        <div className={styles.DiscoverTitle}>DISCOVER</div>
        <div className={styles.DiscoverSeparator}></div>
        <Pods
          pods={this.props.pods}
          podClicked={this.props.onPodClicked}
          activePod={this.props.activePod}
        />
        <AddPod />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pods: state.chat.pods,
    activePod: state.chat.activePod,
    isDiscoverActive: state.chat.isDiscoverActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchPods: (initialPodId) => dispatch(actions.fetchPods(1, initialPodId)),
      onPodClicked: (pod) => dispatch(actions.podClicked(pod)),
      onDiscoverClicked: () => dispatch(actions.discoverClicked())
  };
};

PodContainer = Radium(PodContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PodContainer));
