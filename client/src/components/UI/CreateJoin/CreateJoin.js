import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './CreateJoin.css';
import Create from '../Create/Create';
import * as actions from '../../../store/actions/index';
import CreateIcon from 'react-icons/lib/io/ios-compose';
import JoinIcon from 'react-icons/lib/io/android-exit';

class createJoin extends Component {
  state = {
    showCreate: false
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  closeCreate = () => {
    this.setState({ showCreate: false });
  }

  createClick = () => {
    this.setState({ showCreate: true });
  }

  handleJoinClick = () => {
    this.props.discoverClicked();
    this.props.closeModal();
  }

  render() {
    // ion-ios-compose
    if (this.state.showCreate) {
      return(
            <Create categories={this.props.categories} onRequestClose={this.props.closeModal} closeModal={this.closeCreate.bind(this)}/>
      )
    }

    return (
      <div className={styles.CreateJoin}>
        <div className={styles.Create} onClick={this.createClick}>
          <div>
            <div className={styles.CreateIcon}>
              <CreateIcon />
              <br />
            </div>
            <div className={styles.CreateText}>CREATE A POD</div>
          </div>
        </div>
        <div className={styles.Join} onClick={this.handleJoinClick}>
          <div>
            <div className={styles.JoinIcon}>
              <JoinIcon />
              <br />
            </div>
            <div className={styles.JoinText}>JOIN A POD</div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    categories: state.chat.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
      discoverClicked: () => dispatch(actions.discoverClicked()),
      fetchCategories: () => dispatch(actions.fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(createJoin);
