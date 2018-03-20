import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* authCheckState(action) {
  const token = yield localStorage.getItem('token');
	if (!token) {
		yield put(actions.logout);
	} else {
    const userData = localStorage.getItem('userData');
    yield put(actions.authSuccess(token, userData));
	}
};
