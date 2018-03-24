import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Auth from './components/Auth/Signup/Signup';
import Login from './components/Auth/Login/Login'
import ChatView from './components/Chat/ChatView/ChatView';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.authCheckState();
  }
  
  render() {
    let routes = null;

    if (!this.props.loading) {
      if (this.props.isAuthenticated) {
        routes = (
          <Switch>
            <Route path="/topics/:podId" exact component={ChatView} />
            <Route path="/topics/:podId/:topicId" exact component={ChatView} />
            <Redirect to="/topics/@discover" />
          </Switch>
        );
      } else {
        routes = (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Auth} />
            <Redirect to="/login" />
          </Switch>
        );
      }
    }

    return (
      <React.Fragment>
        {routes}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
<<<<<<< HEAD
	return { 
    error: state.auth.error, 
    token: state.auth.token, 
    isAuthenticated: state.auth.token !== null,
    userData: state.auth.userData
=======
	return {
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null,
    loading: state.auth.loading,
    error: state.auth.error
>>>>>>> Commit progress on changing the intitial flow to use URL params
  };
};

const mapDispatchToProps = dispatch => {
	return {
    authCheckState: () => dispatch(actions.authCheckState())
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
