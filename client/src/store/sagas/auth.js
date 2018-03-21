import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* authCheckState(action) {
  const token = yield localStorage.getItem('token');
	if (!token) {
		yield put(actions.logout);
	} else {
		const userData = JSON.parse(localStorage.getItem('userData'));
    yield put(actions.authSuccess(token, userData));
	}
};

export function* authLogout(action) {
			yield localStorage.removeItem('token');
			yield localStorage.removeItem('userData');
			yield put(actions.authLogout());
}

