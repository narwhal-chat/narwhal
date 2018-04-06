import { put, take, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';
import * as selectors from './selectors';

export function* fetchPods(action) {
  try {
    const token = yield select(selectors.token);
    const userId = yield select(selectors.userId);
    const results = yield axios.get('/pods/' + userId, {
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
    const userId = yield select(selectors.userId);
    const results = yield axios.post('/pods', {
        token: token,
        userId: userId,
        podName: action.podName,
        category: action.category,
        description: action.description,
        avatar: action.avatar
    });
    yield put(actions.fetchPods(userId));
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

    let newActiveTopic = topics[0];

    // If an initialTopicId was supplied
    if (action.initialTopicId) {
      // If the topic id matches one of the newly fetched topics, set that topic as the active topic
      for (let topic of topics) {
        if (topic.id === +action.initialTopicId) {
          newActiveTopic = topic;
        }
      }
      // If the topic was not supplied by the GET request, default to the first topic in the pod
      yield put(actions.setActiveTopic(newActiveTopic));
    } else {
      // If an initialTopicId was not supplied, default to the first topic in the pod
      yield put(actions.setActiveTopic(topics[0]));
    }
    // Send a final action to notify any calling sagas
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
    yield put(actions.fetchTopics(activePod.id, results.data.id));
  } catch (e) {
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

export function* fetchDiscover(action) {
  try {
    const token = yield select(selectors.token);
    const results = yield axios.get('/pods/get/all', {
        params: {
          token: token
        }
    })
    yield put(actions.fetchDiscoverSuccess(results.data));
  } catch (e) {
    yield put(actions.fetchDiscoverFail())
  }
}

export function* fetchCategories(action) {
  try {
    const token = yield select(selectors.token);
    const results = yield axios.get('/categories', {
      params: {
        token: token
      }
    })
    yield put(actions.fetchCategoriesSuccess(results.data));
  } catch (e) {
    yield put(actions.fetchCategoriesFail());
  }
}
export function* categoryClicked(action) {
  try {
    yield put(actions.setActiveCategory(action.activeCategory))
  } catch (e) {

  }
}

export function* joinPod(action) {
  try {
    const token = yield select(selectors.token);
    const userId = yield select(selectors.userId);
    const results = yield axios.post(`/pods/join/${userId}/${action.podId}`, {
      token: token
    })
    yield put(actions.fetchPods(userId));
    yield put(actions.fetchDiscover());
  } catch (e) {
    yield put(actions.joinPodFail())
  }
}