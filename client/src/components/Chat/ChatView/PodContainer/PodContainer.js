import React, { Component } from 'react';
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
    animation: 'x 1s',
    animationName: Radium.keyframes(headShake, 'headShake')
  }
};

class PodContainer extends Component {
  state = {
    discoverIsActive: false
  }

  componentDidMount() {
    this.props.onFetchPods();
  }

  onLogoClick = () => {
    this.setState({discoverIsActive: true});
  }
  
  render() {
    let narwhalLogoAnimation = this.state.discoverIsActive ? animationStyles.headShake : null;

    return (
      <div className={styles.PodContainer}>
        <StyleRoot>
          {/* <div className="TEST" style={animationStyles.headShake}>test</div> */}
          <img className={styles.Logo} style={narwhalLogoAnimation} src={narwhalLogo} alt="Discover" onClick={this.onLogoClick}/>
        </StyleRoot>
        <div className={styles.DiscoverTitle}>DISCOVER</div>
        <div className={styles.DiscoverSeparator}></div>
        <Pods
          pods={this.props.pods}
          onPodClicked={this.props.onPodClicked}
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
    activePod: state.chat.activePod
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchPods: () => dispatch(actions.fetchPods(1)),
      onPodClicked: (pod) => dispatch(actions.podClicked(pod))
  }
}

PodContainer = Radium(PodContainer);

export default connect(mapStateToProps, mapDispatchToProps)(PodContainer);
