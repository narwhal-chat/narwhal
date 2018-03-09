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

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000) // it was in ms.
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
        console.log(authData);
        // let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD6IdRW9yIKJ14lreX9fk_uv1-kQJstQbE'
        // if (!isSignup) {
        //     url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD6IdRW9yIKJ14lreX9fk_uv1-kQJstQbE';
        // }
        axios.post('/register', authData)
            .then(response => {
                console.log('this is the response', response);
                dispatch(authSuccess(response.data.token));
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
            console.log('this is the response in login', response)
            dispatch(authSuccess(response.data.token));
        })
        .catch(err => {
            console.log('error in login', err)
            dispatch(authFail(err.response.data.error))
        })
    }
}