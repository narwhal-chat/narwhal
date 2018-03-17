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
// testing redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/lib/integration/react';

import authReducer from './store/reducers/auth';
import chatReducer from './store/reducers/chat';

import { watchChat } from './store/sagas/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const persistConfig = {
    key: 'root',
    storage: storage
}

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Initialize the Saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware)
));

const persistor = persistStore(store);

sagaMiddleware.run(watchChat);

// testing redux-persist
// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));

ReactDOM.render(
	<Provider store={store}>
		{/* <PersistGate loading={null} persistor={persistor}> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
		{/* </PersistGate> */}
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();