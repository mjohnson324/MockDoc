import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS } from '../actions/doctor_actions';
import { RECEIVE_APPOINTMENT_AND_REVIEW } from '../actions/appointment_actions';
import { RECEIVE_CURRENT_USER,
         CLEAR_STATE } from '../actions/session_actions';
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS:
      return action.reviews;
    case RECEIVE_CURRENT_USER:
      return action.reviews;
    case RECEIVE_APPOINTMENT_AND_REVIEW:
      newState = { [action.review.id] : action.review };
      return merge({}, state, newState);
    case RECEIVE_REVIEW:
      newState = { [action.review.id] : action.review };
      return merge({}, state, newState);
    case REMOVE_REVIEW:
      newState = {};
      for (var reviewId in state) {
          if (parseInt(reviewId, 10) !== action.id) {
            newState[reviewId] = state[reviewId];
          }
      }
      return newState;
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default reviewsReducer;
