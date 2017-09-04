import { RECEIVE_REVIEW,
         UPDATE_REVIEW } from '../actions/review_actions';
import { RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS } from '../actions/doctor_actions';

import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      newState = { [action.review.id] : action.review };
      return merge({}, state, newState);
    case UPDATE_REVIEW:
      newState = { [action.review.id] : action.review };
      return merge({}, state, newState);
    default:
      return state;
  }
};
