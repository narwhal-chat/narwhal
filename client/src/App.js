import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Auth from './components/Auth/Signup/Signup';
import Login from './components/Auth/Login/Login'
import ChatView from './components/Chat/ChatView/ChatView';

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    // let routes = (
    //   <Switch>
    //     <Route path="/login" component={Login} />
    //     <Route path="/Register" component={Auth} />
    //     <Redirect to="/login" />
    //   </Switch>
    // )

    // if (this.props.isAuthenticated) {
    //     routes = (        
    //     <Switch>
		// 			<Route path="/" exact component={ChatView} />
    //       <Redirect to="/" />
    //     </Switch>
    //     );
    // }

    return(
      <React.Fragment>
        <Switch>
          <Route path="/register" component={Auth} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={ChatView} />
        </Switch>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {

}

const mapStateToProps = state => {
	return { 
    error: state.auth.error, 
    token: state.auth.token, 
    isAuthenticated: state.auth.token !== null 
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App