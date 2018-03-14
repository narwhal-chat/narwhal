import * as actionTypes from './actionTypes';
import axios from 'axios';

export const editProfileStart = () => {
  return {
    type: actionTypes.EDIT_PROFILE_START
  }
}

export const editProfileSuccess = (token, userId) => {
  return {
    type: actionTypes.EDIT_PROFILE_SUCCESS,
    idToken: token,
    userId: userId
  }
}

export const editProfileFail = error => {
  return {
    type: actionTypes.EDIT_PROFILE_FAIL,
    error: error
  }
}

// export const auth = (email, password, username, isSignup) => {
// 	return dispatch => {
// 		dispatch(authStart());
// 		let currentDate = new Date(Date.now()).toLocaleString();
// 		const authData = {
// 			username: username,
// 			password: password,
// 			email_address: email,
// 			avatar: 'avatar',
// 			create_date: currentDate,
// 			returnSecureToken: true,
// 		};

// 		axios
// 			.post('/register', authData)
// 			.then(response => {
// 				const expirationDate = new Date(new Date().getTime() + 86400);
// 				localStorage.setItem('token', response.data.token);
// 				localStorage.setItem('expirationDate', expirationDate);
// 				localStorage.setItem('userId', response.data.user);
// 				dispatch(authSuccess(response.data.token, response.data.user));
// 				// dispatch(checkAuthTimeout(response.data.expiresIn))
// 			})
// 			.catch(err => {
// 				console.log(err);
// 				dispatch(authFail(err.response.data.error));
// 			});
// 	};
// };

export const editProfile = (username, newUsername, email, password, token) => {
    return dispatch => {
      dispatch(editProfileStart());
      // check to see if the password is correct;
      let editProfile = {
        username: username,
        newUsername: newUsername,
        email: email,
        password: password,
        token: token
      };

      axios.post('/editProfile', editProfile)
      .then(response => {
        dispatch(editProfileSuccess(response.data.token, response.data.user));
      })


    };
};