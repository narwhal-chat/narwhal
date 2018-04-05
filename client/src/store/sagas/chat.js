import { eventChannel } from 'redux-saga';
import { call, put, take, select, fork, cancel } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';
import io from 'socket.io-client';

import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';
import * as selectors from './selectors';

const connectSocket = () => {
  const socket = io('http://localhost:5000');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

const subscribeSocket = (socket) => {
  return eventChannel(emit => {
    socket.on('RECEIVE_MESSAGE', (message) => {
      emit(actions.messageReceived(message));
    });
    socket.on('disconnect', e => {

    });
    return () => {};
  });
}

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
    yield put(actions.fetchDiscover());
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
    });
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

function* readSocketEvents(socket) {
  const channel = yield call(subscribeSocket, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* writeSocketMessage(socket) {
  while (true) {
    console.log(actions.messageSent);
    const payload = yield take(actionTypes.MESSAGE_SENT);
    console.log('sending message', payload.message);
    socket.emit('SEND_MESSAGE', { message: payload.message, topic: 'rory room' });
  }
}

function* handleSocketIO(socket) {
  yield fork(readSocketEvents, socket);
  yield fork(writeSocketMessage, socket);
}

export function* connectSocketFlow() {
  while (true) {
    // const yoYo = yield take(actionTypes.SET_ACTIVE_TOPIC);
    // console.log(yoYo);
    yield take('CONNECT_SOCKET');
    const socket = yield call(connectSocket);
    yield put(actions.setSocket(socket));

    const task = yield fork(handleSocketIO, socket);

    let action = yield take('logout');
    yield cancel(task);
    socket.emit('logout');
  }
}

export function* joinSocketRoom(socket) {
  while (true) {
    // console.log(actions.joinTopicSocket;
    const payload = yield take(actionTypes.SET_ACTIVE_TOPIC);
    console.log('sending message', payload.topic);
    const socket = yield(select(selectors.socket));
    socket.emit('JOIN_ROOM', `ROOM_${payload.topic.pod_id}_${payload.topic.id}`);
  }
}
