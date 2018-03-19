import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Auth from './components/Auth/Signup/Signup';
import Login from './components/Auth/Login/Login'
import ChatView from './components/Chat/ChatView/ChatView';
import * as actions from './store/actions/index';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
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
					<Route path="/" exact component={ChatView} />
          <Redirect to="/" />
        </Switch>
        );
    }

    return(
      <React.Fragment>
        {routes}
        {/* <Switch>
          <Route path="/register" component={Auth} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={ChatView} />
        </Switch> */}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
	return {
		authCheckState: () => dispatch(actions.authCheckState()),
	};
};

const mapStateToProps = state => {
	return { 
    error: state.auth.error, 
    token: state.auth.token, 
    isAuthenticated: state.auth.token !== null 
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// export default App;