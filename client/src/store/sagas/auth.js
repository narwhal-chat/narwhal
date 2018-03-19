import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* authCheckState(action) {
  const token = yield localStorage.getItem('token');
	if (!token) {
		yield put(actions.logout);
	} else {
    const userId = localStorage.getItem('userId');
    yield put(actions.authSuccess(token, userId));
	}
}