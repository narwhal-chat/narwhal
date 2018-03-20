import { put, select } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';
import * as selectors from './selectors';

export function* fetchPods(action) {
  try {
    const token = yield select(selectors.token);
    const results = yield axios.get('/pods/' + action.userId, {
        params: {
          token: token
        }
    });
    yield put(actions.fetchPodsSuccess(results.data));
  } catch (e) {
    yield put(actions.fetchPodsFail());
  }
};

export function* createPod(action) {
  try {
    const token = yield select(selectors.token);
    yield axios.post('/pods', {
        token: token
    });
    yield put(actions.fetchPods(action.userId));
  } catch (e) {
    yield put(actions.createPodFail());
  }
};

export function* fetchTopics(action) {
  try {
    const token = yield select(selectors.token);
    const results = yield axios.get('/pods/' + action.podId + '/topics', {
        params: {
          token: token
        }
    });
    yield put(actions.fetchTopicsSuccess(results.data));
  } catch (e) {
    yield put(actions.fetchTopicsFail());
  }
};

export function* createTopic(action) {
  try {
    const token = yield select(selectors.token);
    const pod = yield select(selectors.activePod);
    const userId = 1;
    console.log('pod', pod)
    yield axios.post('/pods/' + pod.id + '/topics', {
        token: token
    });
    yield put(actions.fetchTopics(pod.id));
  } catch (e) {
    yield put(actions.createTopicFail());
  }
};

export function* podClicked(action) {
  try {
    yield put(actions.updateActivePod(action.pod));
    yield put(actions.fetchTopics(action.pod.id));
  } catch (e) {

  }
};
