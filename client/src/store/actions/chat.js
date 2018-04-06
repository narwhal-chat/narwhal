import * as actionTypes from './actionTypes';

export const fetchPods = (initialPodId) => {
  return {
      type: actionTypes.FETCH_PODS,
      initialPodId: initialPodId
  };
};

export const fetchPodsSuccess = (pods) => {
  return {
      type: actionTypes.FETCH_PODS_SUCCESS,
      pods: pods
  };
};

export const fetchPodsFail = (error) => {
  return {
      type: actionTypes.FETCH_PODS_FAIL,
      error: error
  };
};

export const createPod = (podName, category, description, avatar) => {
	return {
		type: actionTypes.CREATE_POD,
		podName: podName,
		category: category,
		description: description,
		avatar: avatar
	};
};

export const createPodFail = (error) => {
  return {
      type: actionTypes.CREATE_POD_FAIL,
      error: error
  };
};

export const fetchTopics = (podId, initialTopicId) => {
  return {
      type: actionTypes.FETCH_TOPICS,
      podId: podId,
      initialTopicId: initialTopicId
  };
};

export const fetchTopicsSuccess = (topics) => {
  return {
      type: actionTypes.FETCH_TOPICS_SUCCESS,
      topics: topics
  };
};

export const fetchTopicsFail = (error) => {
  return {
      type: actionTypes.FETCH_TOPICS_FAIL,
      error: error
  };
};

export const fetchTopicsFinished = () => {
  return {
    type: actionTypes.FETCH_TOPICS_FINISHED
  };
};

export const createTopic = (topicName) => {
  return {
      type: actionTypes.CREATE_TOPIC,
      topicName: topicName
  };
};

export const createTopicFail = (error) => {
  return {
      type: actionTypes.CREATE_TOPIC_FAIL,
      error: error
  };
};

export const podClicked = (pod) => {
  return {
    type: actionTypes.POD_CLICKED,
    pod: pod
  };
};

export const setActivePod = (pod) => {
  return  {
    type: actionTypes.SET_ACTIVE_POD,
    pod: pod
  };
};

export const topicClicked = (topic) => {
  return {
    type: actionTypes.TOPIC_CLICKED,
    topic: topic
  };
};

export const setActiveTopic = (topic) => {
  return  {
    type: actionTypes.SET_ACTIVE_TOPIC,
    topic: topic
  };
};

export const discoverClicked = () => {
  return {
    type: actionTypes.DISCOVER_CLICKED
  };
};

export const discoverActive = () => {
  return {
    type: actionTypes.DISCOVER_ACTIVE
  };
};

export const connectSocket = () => {
  return {
    type: actionTypes.CONNECT_SOCKET
  };
};

export const connectSocketSuccess = () => {
  return {
    type: actionTypes.CONNECT_SOCKET_SUCCESS
  };
};

export const diconnectSocket = () => {
  return {
    type: actionTypes.DISCONNECT_SOCKET
  };
};

export const setSocket = (socket) => {
  return {
    type: actionTypes.SET_SOCKET,
    socket: socket
  };
};

export const messageSent = (message) => {
  return {
    type: actionTypes.MESSAGE_SENT,
    message: message
  };
};

export const messageReceived = (message) => {
  return {
    type: actionTypes.MESSAGE_RECEIVED,
    message: message
  };
};

export const fetchDiscover = () => {
  return {
    type: actionTypes.FETCH_DISCOVER
  };
};

export const fetchDiscoverSuccess = (discoverPods) => {
  return {
    type: actionTypes.FETCH_DISCOVER_SUCCESS,
    discover: discoverPods
  };
};

export const fetchDiscoverFail = () => {
  return {
    type: actionTypes.FETCH_DISCOVER_FAIL
  };
};

export const fetchCategories = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES
  };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    categories: categories
  };
};

export const fetchCategoriesFail = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL
  };
};

export const setActiveCategory = (category) => {
  return {
    type: actionTypes.SET_ACTIVE_CATEGORY,
    activeCategory: category
  };
};

export const categoryClicked = (category) => {
  return {
    type: actionTypes.CATEGORY_CLICKED,
    activeCategory: category
<<<<<<< HEAD
  }
}
<<<<<<< HEAD

export const joinPod = (podId) => {
  return {
    type: actionTypes.JOIN_POD,
    podId: podId
  }
}

export const joinPodFail = (error) => {
  return {
    type: actionTypes.JOIN_POD_FAIL,
    error: error
  }
}

export const searchDiscover = (term) => {
  return {
    type: actionTypes.SEARCH_DISCOVER,
    term: term
  }
}

export const updateSearchResults = (data) => {
  return {
    type: actionTypes.UPDATE_SEARCH_RESULTS,
    results: data
  }
}
=======
>>>>>>> Get basic socket.io implementation working with redux-saga and continue working on topic rooms
=======
  };
};
>>>>>>> Add functionality to automatically leave and join socket rooms depending on selected topic
