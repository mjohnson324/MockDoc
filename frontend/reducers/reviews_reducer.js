import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS } from '../actions/doctor_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS:
      return action.reviews;
    case RECEIVE_CURRENT_USER:
      return action.reviews;
    case RECEIVE_REVIEW:
      newState = { [action.review.id] : action.review };
      return merge({}, state, newState);
    case REMOVE_REVIEW:
      newState = state;
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
