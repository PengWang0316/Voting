import { FETCH_CANDIDATES_INFO_SUCCESS, ADD_VOTE_SUCCESS } from '../actions/ActionTypes';

const candidates = (state = null, action) => {
  switch (action.type) {
    case FETCH_CANDIDATES_INFO_SUCCESS:
      return action.candidates;
    case ADD_VOTE_SUCCESS: { // In this case we know we just have two candidates. So, iterating all element is not a big problem.
      const newCandidates = [];
      state.forEach(candidate => {
        newCandidates.push({ ...candidate, votes: candidate.id === action.candidateId ? candidate.vote + 1 : candidate.vote });
      });
      return newCandidates;
    }
    default:
      return state;
  }
};
export default candidates;
