import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
	userData: null,
    error: null,
    isAuthenticating: true,
    authRedirectPath: '/'
};

const authStart = (state, action) => {
    return updateObject(state, { error: null, isAuthenticating: true });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userData: action.userData,
        error: null,
        isAuthenticating: false
    });
};

const authFail = (state, action) => {
	console.log(action)
    return updateObject(state, {
				error: action.error,
				message: action.message,
        isAuthenticating: false
    });
};

const authCheckStateFinished = (state, action) => {
	return updateObject(state, {
		isAuthenticating: false
	});
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userData: null });
};

const editProfileSuccess = (state, action) => {
	return updateObject(state, {
		token: action.idToken,
		userData: action.userData,
		error: null,
		message: null,
	});
};

const editProfileFail = (state, action) => {
  return updateObject(state, {
	error: action.error,
  });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
		case actionTypes.AUTH_START:
		  return authStart(state, action);
		case actionTypes.AUTH_SUCCESS:
		  return authSuccess(state, action);
		case actionTypes.AUTH_FAIL:
		  return authFail(state, action);
		case actionTypes.AUTH_CHECK_STATE_FINISHED:
		  return authCheckStateFinished(state, action);
		case actionTypes.AUTH_LOGOUT:
		  return authLogout(state, action);
		case actionTypes.EDIT_PROFILE_FAIL:
		  return editProfileFail(state, action);
		case actionTypes.EDIT_PROFILE_SUCCESS:
		  return editProfileSuccess(state, action);
		default:
		  return state;
	}
};

export default reducer;
