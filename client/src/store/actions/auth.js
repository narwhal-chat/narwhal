import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userData: userData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    }
}

// For logging out
export const authLogout = () => {
    return { type: actionTypes.AUTH_LOGOUT };
}

export const auth = (email, password, username) => {
    return { 
        type: actionTypes.AUTH,
        email: email,
        password: password,
        username: username
    };
}

export const login = (password, username) => {
    return {
        type: actionTypes.LOGIN,
        password: password,
        username: username
    }
}

// Editing a user profile

export const editProfileSuccess = (token, userData) => {
	return {
		type: actionTypes.EDIT_PROFILE_SUCCESS,
		idToken: token,
		userData: userData,
	};
};

export const editProfileFail = error => {
	return {
		type: actionTypes.EDIT_PROFILE_FAIL,
		error: error,
	};
};

export const editProfile = (username, newUsername, email, password, token) => {
    return {
        type: actionTypes.EDIT_PROFILE_START,
        username: username,
        newUsername: newUsername,
        email: email,
        password: password,
        token: token
    }
}
