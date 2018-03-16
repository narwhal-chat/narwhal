import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// testing redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/lib/integration/react';

import authReducer from './store/reducers/auth'
import userReducer from './store/reducers/user'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

// testing redux-persist
const persistConfig = {
    key: 'root',
    storage: storage
}

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
});

// testing redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const persistor = persistStore(store);

// testing redux-persist
// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));



ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();