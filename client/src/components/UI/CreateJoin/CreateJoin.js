import React, { Component } from 'react';
import styles from './CreateJoin.css';
import Create from '../Create/Create'
import PodContainer from '../../Chat/ChatView/PodContainer/PodContainer'
import DiscoverCategoriesContainer from '../../Chat/ChatView/DiscoverCategoriesContainer/DiscoverCategoriesContainer';
import DiscoverContainer from '../../Chat/ChatView/DiscoverContainer/DiscoverContainer'



class createJoin extends Component {
  state = {
    showCreate: false,
    showJoin: false
  }

  componentDidMount() {

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
      return <Create />;
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
          <div>CREATE</div>
        </div>
        <div className={styles.Join} onClick={this.joinClick}>
          <div>JOIN</div>
        </div>
      </div>
    )
  }
};

export default createJoin;