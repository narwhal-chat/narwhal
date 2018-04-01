import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { headShake } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import styles from './PodContainer.css';
import narwhalLogo from '../../../../assets/images/narwhal.svg';
import Pods from './Pods/Pods';
import AddPod from './AddPod/AddPod';
import * as actions from '../../../../store/actions/index';

// const animationStyles = {
//   headShake: {
//     animation: 'x 1.25s',
//     animationName: Radium.keyframes(headShake, 'headShake')
//   }
// };

class PodContainer extends Component {
  componentDidMount() {
    this.props.onFetchPods(this.props.initialPodId);
  }
  
  render() {
    return (
      <div className={styles.PodContainer}>
        <div className={styles.LogoContainer}>
          <StyleRoot>
            <img
              className={styles.Logo}
              // style={narwhalLogoAnimation}
              src={narwhalLogo} alt="Discover"
              onClick={this.props.onDiscoverClicked}
              draggable="false"
            />
          </StyleRoot>
        </div>
        <div
          className={styles.DiscoverTitle}
          onClick={this.props.onDiscoverClicked}>
          DISCOVER
        </div>
        <div className={styles.DiscoverSeparator}></div>
        <Pods
          pods={this.props.pods}
          podClicked={this.props.onPodClicked}
          activePod={this.props.activePod}
        />
        <AddPod 
          openModal={this.props.openCreateJoinModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pods: state.chat.pods,
    activePod: state.chat.activePod
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchPods: (initialPodId) => dispatch(actions.fetchPods(initialPodId)),
      onPodClicked: (pod) => dispatch(actions.podClicked(pod)),
      onDiscoverClicked: () => dispatch(actions.discoverClicked())
  };
};

PodContainer = Radium(PodContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PodContainer));
