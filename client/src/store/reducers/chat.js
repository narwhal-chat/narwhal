import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    pods: [],
    topics: [],
    messages: []
};

const fetchPodsSuccess = (state, action) => {
  return updateObject(state, {
    pods: action.pods
  });
};

const fetchPodsFail = (state, action) => {
  return updateObject(state);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PODS_SUCCESS: return fetchPodsSuccess(state, action);
    case actionTypes.FETCH_PODS_FAIL: return fetchPodsFail(state, action);
    default: return state;
  }
};

export default reducer;