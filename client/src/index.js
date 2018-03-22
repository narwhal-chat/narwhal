import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';

import authReducer from './store/reducers/auth';
import chatReducer from './store/reducers/chat';

import { watchChat, watchAuth } from './store/sagas/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer,
    form: formReducer
});


// Initialize the Saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware)
));



sagaMiddleware.run(watchChat);
sagaMiddleware.run(watchAuth);


ReactDOM.render(
	<Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();