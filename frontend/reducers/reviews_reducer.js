import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS } from '../actions/doctor_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS || RECEIVE_CURRENT_USER:
      return action.reviews;
    case RECEIVE_REVIEW:
      newState = { [action.review.id] : action.review };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default reviewsReducer;
