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
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: username,
            password: password,
            email_address: email,
            avatar: 'avatar',
            returnSecureToken: true
        };

        axios.post('/register', authData)
            .then(response => {
                // const expirationDate = new Date(new Date().getTime() + 86400);
                localStorage.setItem('token', response.data.token);
                // localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userData', response.data.user);
                dispatch(authSuccess(response.data.token, response.data.user));
                // dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(err => {
                console.log('ERROR REGISTERING', err.response.data);
                dispatch(authFail(err.response.data));
            })

    }
}

export const login = (password, username) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/login', {
            username: username,
            password: password
        })
        .then(response => {
            console.log('LOCALSTORAGE SET ITEM', response.data)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userData', JSON.stringify(response.data.user));
            dispatch(authSuccess(response.data.token, response.data.user));
        })
        .catch((err, res) => {
            dispatch(authFail(err.response.data.error))
        })
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
	return dispatch => {
		let editProfile = {
			username: username,
			newUsername: newUsername,
			email: email,
			password: password,
			token: token,
		};

		axios
			.post('/editProfile', editProfile)
			.then(response => {
				dispatch(editProfileSuccess(response.data.token, response.data.user));
			})
			.catch(err => {
				dispatch(editProfileFail(err.response.data));
			});
	};
};
