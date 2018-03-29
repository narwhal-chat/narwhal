import React, { Component } from 'react';
import styles from './CreateJoin.css';
import Create from '../Create/Create'
import PodContainer from '../../Chat/ChatView/PodContainer/PodContainer'
import DiscoverCategoriesContainer from '../../Chat/ChatView/DiscoverCategoriesContainer/DiscoverCategoriesContainer';
import DiscoverContainer from '../../Chat/ChatView/DiscoverContainer/DiscoverContainer'
import { NavLink } from 'react-router-dom';

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
    console.log('this', this);
    this.setState({ showCreate: true })
  }

  joinClick = () => {
    this.setState({ showJoin: true })
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

    return(
      <div className={styles.CreateJoin}>
        <div className={styles.Create} onClick={this.createClick}>
          <div className={styles.CreateText}>CREATE</div>
        </div>
        {/* <div className={styles.Join} onClick={this.joinClick}> */}
        <NavLink className={styles.Join} to="/login">
          <div>JOIN</div>
        </NavLink>
      </div>
    )
  }
};

export default createJoin;