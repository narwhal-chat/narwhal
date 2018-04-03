import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchPods, createPod, fetchTopics, createTopic, podClicked, topicClicked, discoverClicked, fetchDiscover, fetchCategories, categoryClicked } from './chat';
import { authCheckState, authLogout, auth, login, editProfile } from './auth';

export function* watchChat() {
  yield all([
    takeEvery(actionTypes.FETCH_PODS, fetchPods),
    takeEvery(actionTypes.CREATE_POD, createPod),
    takeEvery(actionTypes.FETCH_TOPICS, fetchTopics),
    takeEvery(actionTypes.CREATE_TOPIC, createTopic),
    takeEvery(actionTypes.POD_CLICKED, podClicked),
    takeEvery(actionTypes.TOPIC_CLICKED, topicClicked),
    takeEvery(actionTypes.DISCOVER_CLICKED, discoverClicked),
    takeEvery(actionTypes.FETCH_DISCOVER, fetchDiscover),
    takeEvery(actionTypes.FETCH_CATEGORIES, fetchCategories),
    takeEvery(actionTypes.CATEGORY_CLICKED, categoryClicked)
  ]);
}

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState),
    takeEvery(actionTypes.AUTH_LOGOUT, authLogout),
    takeEvery(actionTypes.AUTH, auth),
    takeEvery(actionTypes.LOGIN, login),
    takeEvery(actionTypes.EDIT_PROFILE, editProfile)
  ]);
}
