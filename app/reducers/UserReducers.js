import {
  USER_LOGOUT_SUCCESS, USER_LOGIN_SUCCESS,
  PARSER_USER_FROM_JWT_SUCCESS, VOTE_SUCCESS,
} from '../actions/ActionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_SUCCESS:
    case USER_LOGIN_SUCCESS:
    case PARSER_USER_FROM_JWT_SUCCESS:
      return action.user;
    case VOTE_SUCCESS:
      return { ...state, vote_id: action.vote_id };
    default:
      return state;
  }
};

export default user;
