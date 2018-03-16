import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* fetchPods(action) {
  try {
    const results = yield axios.get('/pods/' + action.userId);
    yield put(actions.fetchPodsSuccess(results.data));
  } catch (e) {
    yield put(actions.fetchPodsFail());
  }
}

export function* fetchTopics(action) {
  try {
    const results = yield axios.get('/pods/' + action.podId + '/topics');
    yield put(actions.fetchTopicsSuccess(results.data));
  } catch (e) {
    yield put(actions.fetchTopicsFail());
  }
}