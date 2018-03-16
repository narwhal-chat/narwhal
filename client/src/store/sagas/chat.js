import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* fetchPods(action) {
  try {
    const response = yield axios.get('/pods/' + action.userId);
    yield put(actions.fetchPodsSuccess(response.data));
  } catch (e) {
    yield put(actions.fetchPodsFail());
  }
}