import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* authCheckState(action) {
  const token = yield localStorage.getItem('token');
	if (!token) {
		yield put(actions.logout);
	} else {
		const userData = JSON.parse(localStorage.getItem('userData'));
		console.log('userData in sagas', userData)
    yield put(actions.authSuccess(token, userData));
	}
};
