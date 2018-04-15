import React, { Component } from 'react';
import styles from './ProfileHeader.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../../store/actions/index';
import  { BrowserRouter as Router, Link } from 'react-router-dom';

class ProfileHeader extends Component {

  logout = (e) => {
    e.preventDefault();
    this.props.authLogout();
  }

  render() {
    return(
      <Router>
        <div className={styles.ProfileHeader}>
          <div className={styles.ProfileTitle}>
            EDIT PROFILE
          </div>
          <Link to='/login' onClick={this.logout} className={styles.Logout}>
            LOG OUT
          </Link>
        </div>
      </Router>
    )
  }
};

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    token: state.auth.token,
    user: state.auth.userId,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return{
    authLogout: () => dispatch(actionTypes.authLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
