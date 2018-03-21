import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import styles from './User.css';

class User extends Component {
  render() {
    console.log(Object.keys(this.props.userData));
    return (
      <div className={styles.User}>
        <div className={styles.StatusIcon}></div>
        <div className={styles.Username}>rorywell</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.auth.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
