import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './PodContainer.css';
import narwhalLogo from '../../../../assets/images/narwhal.png';
import Pods from './Pods/Pods';
import AddPod from './AddPod/AddPod';
import * as actions from '../../../../store/actions/index';

class PodContainer extends Component {
  componentDidMount() {
    this.props.onFetchPods();
  }
  
  render() {
    return (
      <div className={styles.PodContainer}>
        <img className={styles.Logo} src={narwhalLogo} alt="Discover"/>
        <div className={styles.DiscoverTitle}>DISCOVER</div>
        <div className={styles.DiscoverSeparator}></div>
        <Pods
          pods={this.props.pods}
        />
        <AddPod />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pods: state.chat.pods
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchPods: () => dispatch(actions.fetchPods(1))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PodContainer);
