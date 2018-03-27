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
      for (let pod of results.data) {
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
    const userId = yield select(selectors.userId)
    const pod = yield axios.post('/pods', {
        token: token,
        userId: userId,
        podName: action.podName,
        category: action.category,
        description: action.description,
        avatar: action.avatar
    });
    yield put(actions.fetchPods(userId));
  } catch (e) {
    console.log('failing');
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
    console.log('this is results', results);
    yield put(actions.fetchTopicsSuccess(results.data));
    const topics = yield select(selectors.topics);

    let newActiveTopic = topics[0];

    // If an initialTopicId was supplied
    if (action.initialTopicId) {
      // If the topic id matches one of the newly fetched topics, set that topic as the active topic
      for (let topic of topics) {
        console.log('inside loop', topic, action.initialTopicId);
        if (topic.id === action.initialTopicId) {
          console.log('matched');
          newActiveTopic = topic;
        }
      }
      // If the topic was not supplied by the GET request, default to the first topic in the pod
      yield put(actions.setActiveTopic(newActiveTopic));
    } else {
      // If an initialTopicId was not supplied, default to the first topic in the pod
      yield put(actions.setActiveTopic(topics[0]));
    }
    yield put(actions.fetchTopicsFinished());
  } catch (e) {
    yield put(actions.fetchTopicsFail());
  }
}

export function* createTopic(action) {
  try {
    const token = yield select(selectors.token);
    const activePod = yield select(selectors.activePod);
    const userId = yield select(selectors.userId);
    const results = yield axios.post('/pods/' + activePod.id + '/topics', {
        token: token,
        userId: userId,
        name: action.topicName
    });
    console.log('new topic', results);
    yield put(actions.fetchTopics(activePod.id, results.data.id));
  } catch (e) {
    console.log('action when create topic', action);
    console.log('error when create topic', e);
    yield put(actions.createTopicFail());
  }
}

export function* podClicked(action) {
  try {
    yield put(actions.authCheckState());
    yield put(actions.setActivePod(action.pod));
    yield put(actions.fetchTopics(action.pod.id));
    yield take(actionTypes.FETCH_TOPICS_FINISHED);
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
