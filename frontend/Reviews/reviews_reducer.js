import { merge } from 'lodash';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from './review_actions';
import { RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS } from '../Doctors/doctor_actions';
import { RECEIVE_APPOINTMENT_AND_REVIEW } from '../Appointments/appointment_actions';
import { RECEIVE_CURRENT_USER } from '../Session/session_actions';

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
    default:
      return state;
  }
};

export default reviewsReducer;
