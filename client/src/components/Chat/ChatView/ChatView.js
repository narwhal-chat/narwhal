import React, { Component } from "react";
import { connect } from 'react-redux';

import styles from "./ChatView.css";
import PodContainer from "./PodContainer/PodContainer";
import TopicContainer from "./TopicContainer/TopicContainer";
import MessageContainer from "./MessageContainer/MessageContainer";
import DiscoverContainer from "./DiscoverContainer/DiscoverContainer";
import DiscoverCategoriesContainer from "./DiscoverContainer/DiscoverCategoriesContainer/DiscoverCategoriesContainer";
import ProfileContainer from "./ProfileContainer/ProfileContainer";
import EditPodContainer from "./EditPodContainer/EditPodContainer";

class ChatView extends Component {
  render() {
    return (
      <div className={styles.ChatView}>
        <PodContainer />
        {/* <DiscoverCategoriesContainer /> */}
        <TopicContainer />
        <MessageContainer />
        {/* <DiscoverContainer /> */}
        {/* <ProfileContainer /> */}
        {/* <EditPodContainer /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
	return { 
    error: state.auth.error, 
    token: state.auth.token, 
    isAuthenticated: state.auth.token !== null 
  };
};

export default connect(mapStateToProps)(ChatView);