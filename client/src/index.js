import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import jwtDecode from 'jwt-decode'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import authReducer from './store/reducers/auth';
import chatReducer from './store/reducers/chat';
import { watchChat, watchAuth } from './store/sagas/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer,
    routing: routerReducer
});

const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

// middleware to check expiration
const checkTokenExpirationMiddleware = store => next => action => {
  const token = localStorage.getItem('token');
  if (token) {
    if (jwtDecode(token).exp < Date.now() / 1000) {
      next(action);
      localStorage.clear();
    }
  }
	next(action);
};

// Initialize the Saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware, reduxRouterMiddleware, checkTokenExpirationMiddleware)
));

sagaMiddleware.run(watchChat);
sagaMiddleware.run(watchAuth);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
