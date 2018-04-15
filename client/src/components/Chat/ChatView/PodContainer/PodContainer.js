import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Radium, { StyleRoot } from 'radium';

import styles from './PodContainer.css';
import narwhalLogo from '../../../../assets/images/narwhal.svg';
import Pods from './Pods/Pods';
import * as actions from '../../../../store/actions/index';

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
          openCreateJoinModal={this.props.openCreateJoinModal}
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
