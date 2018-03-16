import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchPods, fetchTopics } from './chat';

export function* watchChat() {
  yield all([
    takeEvery(actionTypes.FETCH_PODS, fetchPods),
    takeEvery(actionTypes.FETCH_TOPICS, fetchTopics)
  ]);
};