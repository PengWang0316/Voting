import axios from 'axios';

import {
  USER_LOGOUT_SUCCESS, USER_LOGIN_SUCCESS, PARSER_USER_FROM_JWT_SUCCESS, VOTE_SUCCESS,
} from './ActionTypes';
import {
  API_JWTMESSAGE_VERIFY, API_LOGIN_WITH_PASSWORD, API_VOTE,
} from './ApiUrls';
import { addVoteSuccess } from './CandidateActions';
// import { JWT_MESSAGE } from '../config';


const userLogoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS,
  user: {},
});

const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user,
});

const parserUserFromJwtSuccess = user => ({
  type: PARSER_USER_FROM_JWT_SUCCESS,
  user,
});

const voteSuccess = voteId => ({
  type: VOTE_SUCCESS,
  vote_id: voteId,
});

export const emptyUser = () => userLoginSuccess({});

export const logout = () => dispatch => dispatch(userLogoutSuccess());

// export const registerUser = user => dispatch => axios.post(API_REGISTER_USER, user)
//   .then(({ data }) => { // After get user back, write it to localStorage and dispatch it to redux.
//     // localStorage.setItem(JWT_MESSAGE, data.jwt); React Native could not use the localStorage
//     dispatch(userLoginSuccess(data));
//   })
//   .catch(err => console.error(err));

export const loginWithPassword = ({ username, password }) => dispatch => axios.get(API_LOGIN_WITH_PASSWORD, { params: { username, password } }).then(({ data }) => {
  // if (data) localStorage.setItem(JWT_MESSAGE, data.jwt);  React Native could not use the localStorage
  dispatch(userLoginSuccess(data));
}).catch(err => console.error(err));

// export const checkUsernameAvailable = username => new Promise((resolve, reject) => axios.get(API_CHECK_USERNAME_AVAILABLE, { params: { username } })
//   .then(({ data }) => resolve(data)).catch(err => console.error(err)));

export const parserUserFromJwt = jwtMessage => dispatch => axios.get(API_JWTMESSAGE_VERIFY, { params: { jwtMessage } })
  .then(({ data }) => dispatch(parserUserFromJwtSuccess(data))).catch(err => console.error(err));

export const vote = (jwt, candidateId) => dispatch => axios.put(API_VOTE, { jwt, candidateId }).then(() => {
  dispatch(voteSuccess(candidateId));
  dispatch(addVoteSuccess(candidateId));
}).catch(err => console.error(err));
