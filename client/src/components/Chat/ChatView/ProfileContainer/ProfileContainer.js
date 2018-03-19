import React, { Component } from 'react';
import styles from './ProfileContainer.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.authCheckState();
  }
  render() {
    return(
      <div className={styles.ProfileContainer}>
        <ProfileHeader />
        <ProfileInfo />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
	return {
    authCheckState: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);