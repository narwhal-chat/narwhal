import { put, take, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';
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

    // Check if an initial pod id was passed in from the route params
    if (action.initialPodId) {
      console.log('hi');
      for (let pod of results.data) {
        console.log('pod', pod.id, action.initialPodId);
        if (pod.id === +action.initialPodId) {
          yield put(actions.setActivePod(pod));
          break;
        }
      }
    }
  } catch (e) {
    yield put(actions.fetchPodsFail());
  }
}

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
}

export function* fetchTopics(action) {
  try {
    const token = yield select(selectors.token);
    const results = yield axios.get('/pods/' + action.podId + '/topics', {
        params: {
          token: token
        }
    });
    yield put(actions.fetchTopicsSuccess(results.data));
    const topics = yield select(selectors.topics);
    yield put(actions.setActiveTopic(topics[0]));
    yield put(actions.fetchTopicsComplete());
  } catch (e) {
    yield put(actions.fetchTopicsFail());
  }
}

export function* createTopic(action) {
  try {
    const token = yield select(selectors.token);
    const activePod = yield select(selectors.activePod);
    const userId = 1;
    yield axios.post('/pods/' + activePod.id + '/topics', {
        token: token
    });
    yield put(actions.fetchTopics(activePod.id));
  } catch (e) {
    yield put(actions.createTopicFail());
  }
}

export function* podClicked(action) {
  try {
    yield put(actions.setActivePod(action.pod));
    yield put(actions.fetchTopics(action.pod.id));
    yield take(actionTypes.FETCH_TOPICS_COMPLETE);
    const activeTopic = yield select(selectors.activeTopic);
    yield put(push(`/topics/${action.pod.id}/${activeTopic.id}`));
  } catch (e) {

  }
}

export function* topicClicked(action) {
  try {
    yield put(actions.setActiveTopic(action.topic));
    yield put(push(`/topics/${action.topic.pod_id}/${action.topic.id}`));
  } catch (e) {

  }
}

export function* discoverClicked(action) {
  try {
    yield put(actions.discoverActive());
    yield put(push('/topics/@discover'));
  } catch (e) {

  }
}
