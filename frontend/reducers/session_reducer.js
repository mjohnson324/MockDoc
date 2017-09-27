import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER,
         UPDATE_CURRENT_USER } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, nullUser, action.session);
    case UPDATE_CURRENT_USER:
      return merge({}, state, action.session);
    default:
      return state;
  }
};

export default sessionReducer;
