import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    userData: null,
    error: null,
    loading: false
};

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
	console.log('action in authsuccess', action)
    return updateObject(state, {
        token: action.idToken,
        userData: action.userData,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userData: null });
};

const authCheckToken = (state, action) => {
    return updateObject(state, { token: null, userData: null })
}

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