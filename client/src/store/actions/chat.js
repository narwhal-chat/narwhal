import * as actionTypes from './actionTypes';

export const fetchPods = (userId) => {
  return {
      type: actionTypes.FETCH_PODS,
      userId: userId
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

export const createPod = (userId) => {
  return {
      type: actionTypes.CREATE_POD,
      userId: userId
  };
};

export const createPodFail = (error) => {
  return {
      type: actionTypes.CREATE_POD_FAIL,
      error: error
  };
};

export const fetchTopics = (podId) => {
  return {
      type: actionTypes.FETCH_TOPICS,
      podId: podId
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

export const createTopic = () => {
  return {
      type: actionTypes.CREATE_TOPIC
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

export const updateActivePod = (pod) => {
  return  {
    type: actionTypes.UPDATE_ACTIVE_POD,
    pod: pod
  }
};
