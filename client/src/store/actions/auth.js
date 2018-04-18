import * as actionTypes from './actionTypes';

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

export const authFail = (error, message) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
        message: message
    };
};

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    }
}

export const authCheckStateFinished = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE_FINISHED
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

export const editProfileReset = () => {
    return { type: actionTypes.EDIT_PROFILE_RESET }
}

export const editProfileSuccess = (token, userData) => {
	return {
		type: actionTypes.EDIT_PROFILE_SUCCESS,
		idToken: token,
		userData: userData,
	};
};

export const editProfileFail = (error, errorType) => {
	return {
		type: actionTypes.EDIT_PROFILE_FAIL,
        error: error,
        errorType: errorType
	};
};

export const editProfile = (username, newUsername, email, avatar, password) => {
    return {
        type: actionTypes.EDIT_PROFILE,
        username: username,
        newUsername: newUsername,
        email: email,
        avatar: avatar,
        password: password
    }
}
