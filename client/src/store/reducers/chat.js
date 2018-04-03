import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    pods: [],
    discover: [],
    topics: [],
    messages: [],
    categories: [],
    activePod: null,
    activeTopic: null
};

const fetchPodsSuccess = (state, action) => {
  return updateObject(state, {
    pods: action.pods,
    inDiscover: false
  });
};

const fetchPodsFail = (state, action) => {
  return updateObject(state);
};

const createPodFail = (state, action) => {
  return updateObject(state);
};

const fetchTopicsSuccess = (state, action) => {
  return updateObject(state, {
    topics: action.topics
  });
};

const fetchTopicsFail = (state, action) => {
  return updateObject(state);
};

const createTopicFail = (state, action) => {
  return updateObject(state);
};

const setActivePod = (state, action) => {
  return updateObject(state, {
    activePod: action.pod
  });
};

const setActiveTopic = (state, action) => {
  return updateObject(state, {
    activeTopic: action.topic
  });
};

const discoverActive = (state, action) => {
  return updateObject(state, {
    activePod: null,
    activeTopic: null
  });
};

const addMessage = (state, action) => {
  return updateObject(state, {
    messages: [...state.messages, action.message]
  });
};

const fetchDiscoverSuccess = (state, action) => {
  console.log('action', action)
  return updateObject(state, {
    discover: action.discover
  })
}

const fetchDiscoverFail = (state, action) => {
  return updateObject(state);
}

const fetchCategoriesSuccess = (state, action) => {
  return updateObject(state, {
    categories: action.categories
  })
}

const fetchCategoriesFail = (state, action) => {
  return updateObject(state);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PODS_SUCCESS: return fetchPodsSuccess(state, action);
    case actionTypes.FETCH_PODS_FAIL: return fetchPodsFail(state, action);
    case actionTypes.CREATE_POD_FAIL: return createPodFail(state, action);
    case actionTypes.FETCH_TOPICS_SUCCESS: return fetchTopicsSuccess(state, action);
    case actionTypes.FETCH_TOPICS_FAIL: return fetchTopicsFail(state, action);
    case actionTypes.CREATE_TOPIC_FAIL: return createTopicFail(state, action);
    case actionTypes.SET_ACTIVE_POD: return setActivePod(state, action);
    case actionTypes.SET_ACTIVE_TOPIC: return setActiveTopic(state, action);
    case actionTypes.DISCOVER_ACTIVE: return discoverActive(state, action);
    case actionTypes.ADD_MESSAGE: return addMessage(state, action);
    case actionTypes.FETCH_DISCOVER_SUCCESS: return fetchDiscoverSuccess(state, action);
    case actionTypes.FETCH_DISCOVER_FAIL: return fetchDiscoverFail(state, action);
    case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess(state, action);
    case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail(state, action);
    default: return state;
  }
};

export default reducer;
