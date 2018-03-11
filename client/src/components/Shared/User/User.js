import React, { Component } from 'react';

import styles from './User.css';

class User extends Component {
  render() {
    return (
      <div className={styles.User}>
        <div className={styles.StatusIcon}></div>
        <div className={styles.Username}>rorywell</div>
      </div>
    );
  }
}

export default User;