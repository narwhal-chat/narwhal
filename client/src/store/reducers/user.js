import * as actionTypes from '../actions/actionTypes';

const initialState = {
	token: null,
	userId: null,
  error: null,
  message: null
};

const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties,
	};
};

const editProfileSuccess = (state, action) => {
	return updateObject(state, {
		token: action.idToken,
		userId: action.userId,
    error: null,
    message: null
	});
};

const editProfileFail = (state, action) => {
	return updateObject(state, {
		error: action.error
	});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_PROFILE_FAIL:
      return editProfileFail(state, action);
    case actionTypes.EDIT_PROFILE_SUCCESS:
      return editProfileSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;