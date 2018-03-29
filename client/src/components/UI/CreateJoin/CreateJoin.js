import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './CreateJoin.css';
import Create from '../Create/Create';
import PodContainer from '../../Chat/ChatView/PodContainer/PodContainer';
import DiscoverCategoriesContainer from '../../Chat/ChatView/DiscoverCategoriesContainer/DiscoverCategoriesContainer';
import DiscoverContainer from '../../Chat/ChatView/DiscoverContainer/DiscoverContainer';
import * as actions from '../../../store/actions/index';

class createJoin extends Component {
  state = {
    showCreate: false,
    showJoin: false
  }

  componentDidMount() {

  }

  closeCreate = () => {
    this.setState({ showCreate: false });
  }

  createClick = () => {
    this.setState({ showCreate: true });
  }

  handleJoinClick = () => {
    this.props.updateRoute('/');
  }

  render() {
    if(this.state.showCreate) {
      return <Create onRequestClose={this.props.closeModal} closeModal={this.closeCreate.bind(this)}/>;
    }

    if(this.state.showJoin) {
      return(
        <div className={styles.ChatView}>
          <PodContainer />
          <DiscoverCategoriesContainer />
          <DiscoverContainer />
        </div>
      )
    }

    return (
      <div className={styles.CreateJoin}>
        <div className={styles.Create} onClick={this.createClick}>
          <div className={styles.CreateText}>CREATE POD</div>
        </div>
        <div
          className={styles.Join}
          onClick={this.handleJoinClick}>
          JOIN POD
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
      updateRoute: (route) => dispatch(actions.updateRoute(route)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(createJoin);
