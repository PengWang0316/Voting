import { combineReducers } from 'redux';

import user from './UserReducers';
import candidates from './Candidates';

export default combineReducers({
  candidates,
  user,
});
