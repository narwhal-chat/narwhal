import { call, put, take, select, fork, cancel } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';
import * as selectors from './selectors'

export function* authCheckState(action) {
	try {
		const token = yield localStorage.getItem('token');
			if (!token) {
				yield put(actions.authCheckStateFinished());
				yield put(actions.authLogout());
			} 
			else {
				const userData = JSON.parse(localStorage.getItem('userData'));
				yield put(actions.authSuccess(token, userData));
			}
	} catch (e) {

	}
}

export function* authLogout(action) {
	yield localStorage.removeItem('token');
	yield localStorage.removeItem('userData');
}

export function* auth(action) {
	
	const authData = {
		username: action.username,
		password: action.password,
		email_address: action.email,
		avatar: 'avatar',
		returnSecureToken: true
	}
	try {
		const response = yield axios.post('/register', authData)

		yield localStorage.setItem('token', response.data.token);
		yield localStorage.setItem('userData', JSON.stringify(response.data.user));
		yield put(actions.authSuccess(response.data.token, response.data.user));
	} catch (error) {
		yield put(actions.authFail(error.response.data));
	}
}

export function* login(action) {
	try {
		const response = yield axios.post('/login', { username: action.username, password: action.password })
		yield localStorage.setItem('token', response.data.token);
		yield localStorage.setItem('userData', JSON.stringify(response.data.user));
		yield put(actions.authSuccess(response.data.token, response.data.user));
	} catch (error) {
		yield put(actions.authFail(error.response.data.error, error.response.data.message));
	}
}

export function* editProfile(action) {
	try {
		console.log('ACTION', action);
		const token = yield select(selectors.token);
		const response = yield axios.post('/editProfile', {
			username: action.username,
			newUsername: action.newUsername,
			email: action.email,
			avatar: action.avatar,
			password: action.password,
			token: token
		})
		// yield put(actions.editProfileReset());
		yield localStorage.setItem('token', response.data.token);
		yield localStorage.setItem('userData', JSON.stringify(response.data.user));
		yield put(actions.editProfileSuccess(response.data.token, response.data.user));
		yield put(actions.editProfileReset());
	} catch(error) {
		// yield put(actions.editProfileReset());
		yield put(actions.editProfileFail(error.response.data.error, error.response.data.errorType));
		
	}
}
