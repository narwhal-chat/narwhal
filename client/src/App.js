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
    console.log('this props in app.js', this.props)
    this.props.authCheckState();
  }
  
  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Auth} />
        <Redirect to="/login" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
        routes = (        
        <Switch>
					<Route path="/pods/@discover" exact component={ChatView} />
          <Redirect to="/pods/@discover" />
        </Switch>
        );
    }

    return(
      <React.Fragment>
        {routes}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  console.log('state in app.js', state)
	return { 
    error: state.auth.error, 
    token: state.auth.token, 
    isAuthenticated: state.auth.token !== null,
    userData: state.auth.userData
  };
};

const mapDispatchToProps = dispatch => {
	return {
    authCheckState: () => dispatch(actions.authCheckState())
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
