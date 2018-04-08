import { eventChannel } from 'redux-saga';
import { call, put, take, select, fork, cancel } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';
import io from 'socket.io-client';

import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';
import * as selectors from './selectors';

const connectSocket = () => {
  const socket = io('/');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

const subscribeSocket = (socket) => {
  return eventChannel(emit => {
    socket.on('INITIAL_MESSAGE_HISTORY', (payload) => {
      emit(actions.messagesReceived(payload.messages));
    });
    socket.on('RECEIVE_MESSAGE', (payload) => {
      emit(actions.messagesReceived(payload.messages));
    });
    socket.on('disconnect', e => {

    });
    return () => {};
  });
};

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
    // If the socket hasn't already been established, create the socket and wait for a success action before continuing
    const socket = yield(select(selectors.socket));
    if (!socket) {
      yield put(actions.connectSocket());
      yield take(actionTypes.CONNECT_SOCKET_SUCCESS);
    }

    const token = yield select(selectors.token);
    const userId = yield select(selectors.userId);
    const result = yield axios.post('/pods', {
        token: token,
        userId: userId,
        podName: action.podName,
        category: action.category,
        description: action.description,
        avatar: action.avatar
    });

    // Fetch the latest set of pods and if we receive the pod we just created, set that as the active pod
    yield put(actions.fetchPods());
    const payload = yield take(actionTypes.FETCH_PODS_SUCCESS);
    for (let pod of payload.pods) {
      if (pod.id === result.data.id) {
        yield put(actions.podClicked(pod));
      }
    }
    
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
    // Leave the previous topic's socket room
    const previousTopic = yield(select(selectors.activeTopic));
    const socket = yield(select(selectors.socket));
    if (previousTopic && socket) {
      socket.emit('LEAVE_ROOM', `ROOM_${previousTopic.pod_id}_${previousTopic.id}`);
    }

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

    // If the socket hasn't already been established, create the socket and wait for a success action before continuing
    const socket = yield(select(selectors.socket));
    if (!socket) {
      yield put(actions.connectSocket());
      yield take(actionTypes.CONNECT_SOCKET_SUCCESS);
    }

    // If a pod was previously selected, first leave the socket room associated with the previous active topic
    const previousTopic = yield(select(selectors.activeTopic));
    if (previousTopic && socket) {
      socket.emit('LEAVE_ROOM', `ROOM_${previousTopic.pod_id}_${previousTopic.id}`);
    }
    
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
    // Leave the previous topic's socket room
    const previousTopic = yield(select(selectors.activeTopic));
    const socket = yield(select(selectors.socket));
    if (previousTopic && socket) {
      socket.emit('LEAVE_ROOM', `ROOM_${previousTopic.pod_id}_${previousTopic.id}`);
    }

    yield put(actions.setActiveTopic(action.topic));
    yield put(push(`/topics/${action.topic.pod_id}/${action.topic.id}`));
  } catch (e) {

  }
}

export function* discoverClicked(action) {
  try {
    // If a socket room is still active, leave the room
    const previousTopic = yield(select(selectors.activeTopic));
    const socket = yield(select(selectors.socket));
    if (previousTopic && socket) {
      socket.emit('LEAVE_ROOM', `ROOM_${previousTopic.pod_id}_${previousTopic.id}`);
    }

    yield put(actions.discoverActive());
    // yield put(actions.diconnectSocket());
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
    yield axios.post(`/pods/join/${userId}/${action.podId}`, {
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
    const payload = yield take(actionTypes.MESSAGE_SENT);
    const activeTopic = yield(select(selectors.activeTopic));
    const userId = yield(select(selectors.userId));
    socket.emit('SEND_MESSAGE', {
      topicId: activeTopic.id,
      userId: userId,
      messageText: payload.message,
      hello: 'hi',
      room: `ROOM_${activeTopic.pod_id}_${activeTopic.id}`
    });
  }
}

function* handleSocketIO(socket) {
  yield fork(readSocketEvents, socket);
  yield fork(writeSocketMessage, socket);
}

export function* connectSocketFlow() {
  while (true) {
    yield take(actionTypes.CONNECT_SOCKET);
    const socket = yield call(connectSocket);
    yield put(actions.setSocket(socket));
    yield put(actions.connectSocketSuccess());

    const task = yield fork(handleSocketIO, socket);

    yield take('DISCONNECT_SOCKET');
    yield cancel(task);
  }
}

export function* joinSocketRoom(socket) {
  const pods = yield select(selectors.pods);
  if (pods.length) {
    while (true) {
      const payload = yield take(actionTypes.SET_ACTIVE_TOPIC);
      const socket = yield select(selectors.socket);
      yield socket.emit('JOIN_ROOM', {
        topicId: payload.topic.id,
        room: `ROOM_${payload.topic.pod_id}_${payload.topic.id}`
      });
    }
  }
}
