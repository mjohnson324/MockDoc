import {
  RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS,
  CLEAR_DOCTORS } from './doctor_actions';
import { RECEIVE_SEARCH_RESULTS } from '../Search/search_actions';
import { merge } from 'lodash';

const doctorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.doctors;
    case RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS:
      newState = { [action.doctor.id]: action.doctor };
      return merge({}, state, newState);
    case CLEAR_DOCTORS:
      return {};
    default:
      return state;
  }
};

export default doctorsReducer;
