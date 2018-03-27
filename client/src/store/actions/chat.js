import * as actionTypes from './actionTypes';

export const fetchPods = (userId, initialPodId) => {
  return {
      type: actionTypes.FETCH_PODS,
      userId: userId,
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
  }
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
  }
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

export const addMessage = (message) => {
  return {
    type: actionTypes.ADD_MESSAGE,
    message: message
  }
};
