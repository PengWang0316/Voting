import axios from 'axios';

import { FETCH_CANDIDATES_INFO_SUCCESS } from './ActionTypes';
import { API_FETCH_CANDIDATES_INFO } from './ApiUrls';

const fetchCandidatesInfoSuccess = candidates => ({
  type: FETCH_CANDIDATES_INFO_SUCCESS,
  candidates,
});
export const fetchCandidatesInfo = () => dispatch => axios.get(API_FETCH_CANDIDATES_INFO)
  .then(({ data }) => dispatch(fetchCandidatesInfoSuccess(data))).catch(err => console.error(err));

export default fetchCandidatesInfo;
