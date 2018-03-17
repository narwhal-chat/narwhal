import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


// For logging out

export const authLogout = () => {
    return { type: actionTypes.AUTH_LOGOUT };
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        dispatch(authLogout())
    }
}

// export const checkAuthTimeout = (expirationTime) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(logout());
//         }, expirationTime * 1000) // it was in ms.
//     }
// }

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const auth = (email, password, username) => {
    return dispatch => {
        dispatch(authStart());
        let currentDate = new Date(Date.now()).toLocaleString();;
        const authData = {
            username: username,
            password: password,
            email_address: email,
            avatar: 'avatar',
            create_date: currentDate,
            returnSecureToken: true
        };

        axios.post('/register', authData)
            .then(response => {
                // const expirationDate = new Date(new Date().getTime() + 86400);
                localStorage.setItem('token', response.data.token);
                // localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.user);
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
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.user);
            dispatch(authSuccess(response.data.token, response.data.user));
        })
        .catch((err, res) => {
            dispatch(authFail(err.response.data.error))
        })
    }
}

// Editing a user profile

export const editProfileSuccess = (token, userId) => {
	return {
		type: actionTypes.EDIT_PROFILE_SUCCESS,
		idToken: token,
		userId: userId,
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