import * as actionTypes from '../actions/actionTypes';

const initialState = {
	token: null,
	userId: null,
	error: null,
	loading: false,
	authRedirectPath: '/',
};

const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties,
	};
};

const reducer = (state = initialState, action) => {
  return null;
};

export default reducer;