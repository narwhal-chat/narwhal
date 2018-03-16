import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchPods } from './chat';

export function* watchChat() {
  yield all([
    takeEvery(actionTypes.FETCH_PODS, fetchPods)
  ]);
};