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