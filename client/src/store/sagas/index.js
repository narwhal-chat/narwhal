import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchPods, createPod, fetchTopics, createTopic, podClicked, topicClicked } from './chat';
import { authCheckState } from './auth';

export function* watchChat() {
  yield all([
    takeEvery(actionTypes.FETCH_PODS, fetchPods),
    takeEvery(actionTypes.CREATE_POD, createPod),
    takeEvery(actionTypes.FETCH_TOPICS, fetchTopics),
    takeEvery(actionTypes.CREATE_TOPIC, createTopic),
    takeEvery(actionTypes.POD_CLICKED, podClicked),
    takeEvery(actionTypes.TOPIC_CLICKED, topicClicked)
  ]);
};

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState)
  ]);
};
