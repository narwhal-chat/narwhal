import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    pods: [],
    discover: [],
    topics: [],
    messages: [],
    categories: [],
    search: '',
    searchResults: [],
    activePod: null,
    activeTopic: null,
    activeCategory: 'Trending',
    socket: null
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
    activePod: action.pod,
    activeCategory: null
  });
};

const setActiveTopic = (state, action) => {
  return updateObject(state, {
    activeTopic: action.topic,
    messages: [],
    activeCategory: null
  });
};

const discoverActive = (state, action) => {
  return updateObject(state, {
    activePod: null,
    activeTopic: null,
    activeCategory: 'Trending'
  });
};

const setSocket = (state, action) => {
  return updateObject(state, {
    socket: action.socket
  })
};

const disconnectSocket = (state, action) => {
  return updateObject(state, {
    socket: null
  });
};

const messageReceived = (state, action) => {
  return updateObject(state, {
    messages: [...state.messages, action.message]
  });
};

const fetchDiscoverSuccess = (state, action) => {
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

const setActiveCategory = (state, action) => {
  return updateObject(state, {
    activeCategory: action.activeCategory
  })
}

const joinPodFail = (state, action) => {
  return updateObject(state);
}

const searchDiscover = (state, action) => {
  return updateObject(state, {
    search: action.term
  })
}

const updateSearchResults = (state, action) => {
  return updateObject(state, {
    searchResults: action.results
  })
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
    case actionTypes.SET_SOCKET: return setSocket(state, action);
    case actionTypes.DISCONNECT_SOCKET: return disconnectSocket(state, action);
    case actionTypes.MESSAGE_RECEIVED: return messageReceived(state, action);
    case actionTypes.FETCH_DISCOVER_SUCCESS: return fetchDiscoverSuccess(state, action);
    case actionTypes.FETCH_DISCOVER_FAIL: return fetchDiscoverFail(state, action);
    case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess(state, action);
    case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail(state, action);
    case actionTypes.SET_ACTIVE_CATEGORY: return setActiveCategory(state, action);
    case actionTypes.JOIN_POD_FAIL: return joinPodFail(state, action);
    case actionTypes.SEARCH_DISCOVER: return searchDiscover(state, action);
    case actionTypes.UPDATE_SEARCH_RESULTS: return updateSearchResults(state, action);
    default: return state;
  }
};

export default reducer;
