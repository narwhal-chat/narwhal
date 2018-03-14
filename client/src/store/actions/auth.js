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

// export const logout = () => {
//     return {
//         type: actionTypes.AUTH_LOGOUT
//     }
// }
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

export const auth = (email, password, username, isSignup) => {
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
                const expirationDate = new Date(new Date().getTime() + 86400);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.user);
                dispatch(authSuccess(response.data.token, response.data.user));
                // dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));
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
            const expirationDate = new Date(new Date().getTime() + 86400)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', response.data.user);
            dispatch(authSuccess(response.data.token, response.data.user));
        })
        .catch(err => {
            console.log('error in login', err)
            dispatch(authFail(err.response.data.error))
        })
    }
}