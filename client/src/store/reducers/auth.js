import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
		userData: null,
		error: null,
		errorType: {
			username: '',
			password: '',
			email: ''
		},
		isAuthenticating: true,
    authRedirectPath: '/'
};

const authStart = (state, action) => {
    return updateObject(state, {
			error: null,
			isAuthenticating: true
		});
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

const editProfileReset = (state, action) => {
	return updateObject(state, {
		error: null,
		errorType: {
			username: '',
			password: '',
			email: ''
		}
	})
}

const editProfileSuccess = (state, action) => {
	console.log('success', action)
	return updateObject(state, {
		token: action.idToken,
		userData: action.userData,
		error: false,
		errorType: {
			username: '',
			password: '',
			email: '',
		}
	});
};

const editProfileFail = (state, action) => {
	console.log('fail action', action);
  return updateObject(state, {
		error: true,
		errorType: action.errorType
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
		case actionTypes.EDIT_PROFILE_RESET:
			return editProfileReset(state, action);
		case actionTypes.EDIT_PROFILE_FAIL:
		  return editProfileFail(state, action);
		case actionTypes.EDIT_PROFILE_SUCCESS:
		  return editProfileSuccess(state, action);
		default:
		  return state;
	}
};

export default reducer;
