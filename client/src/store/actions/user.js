import * as actionTypes from './actionTypes';
import axios from 'axios';

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


export const editProfile = (username, newUsername, email, password, token) => {
    return dispatch => {

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
      .catch(err => {
        dispatch(editProfileFail(err.response.data))
      })


    };
};