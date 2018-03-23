import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';

export function* authCheckState(action) {
	try {
		const token = yield localStorage.getItem('token');
		if (token) {
			const userData = JSON.parse(localStorage.getItem('userData'));
			yield put(actions.authSuccess(token, userData));
		}
	} catch (e) {
		yield put(actions.logout);
	}

};

export function* authLogout(action) {
			yield localStorage.removeItem('token');
			yield localStorage.removeItem('userData');
			yield put(actions.authLogout());
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
		yield localStorage.setItem('userData', response.data.user);
		yield put(actions.authSuccess(response.data.token, response.data.user));
	} catch (error) {
		yield put(actions.authFail(error.response.data));
	}

}

export function* login(action) {
	try {
		const response = yield axios.post('/login', { username: action.username, password: action.password })
		console.log(response, 'response in login')
		yield localStorage.setItem('token', response.data.token);
		yield localStorage.setItem('userData', JSON.stringify(response.data.user));
		yield put(actions.authSuccess(response.data.token, response.data.user));
	} catch (error) {
		yield put(actions.authFail(error.response.data.error));
	}
}

export function* editProfile(action) {
	let editProfile = {
		username: action.username,
		newUsername: action.newUsername,
		email: action.email,
		password: action.password,
		token: action.token
	}
	try {
		const response = axios.post('/editProfile', editProfile)
		yield put(actions.editProfileSuccess(response.data.token, response.data.user));
	} catch(error) {
		yield put(actions.editProfileFail(error.response.data));
	}
}
