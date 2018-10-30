import { FETCH_CANDIDATES_INFO_SUCCESS } from '../actions/ActionTypes';

const candidates = (state = null, action) => {
  switch (action.type) {
    case FETCH_CANDIDATES_INFO_SUCCESS:
      return action.candidates;
    default:
      return state;
  }
};
export default candidates;
