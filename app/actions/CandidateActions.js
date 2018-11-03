import axios from 'axios';

import { FETCH_CANDIDATES_INFO_SUCCESS, ADD_VOTE_SUCCESS } from './ActionTypes';
import { API_FETCH_CANDIDATES_INFO } from './ApiUrls';

const fetchCandidatesInfoSuccess = candidates => ({
  type: FETCH_CANDIDATES_INFO_SUCCESS,
  candidates,
});
export const fetchCandidatesInfo = () => dispatch => axios.get(API_FETCH_CANDIDATES_INFO)
  .then(({ data }) => dispatch(fetchCandidatesInfoSuccess(data))).catch(err => console.error(err));

export const addVoteSuccess = candidateId => ({
  type: ADD_VOTE_SUCCESS,
  candidateId,
});
