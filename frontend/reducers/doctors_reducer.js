import {
  RECEIVE_DOCTORS_AND_APPOINTMENTS,
  RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS } from '../actions/doctor_actions';
import { CLEAR_STATE } from '../actions/session_actions';
import { merge } from 'lodash';

const doctorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_DOCTORS_AND_APPOINTMENTS:
      return action.doctors;
    case RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS:
      newState = { [action.doctor.id]: action.doctor };
      return merge({}, state, newState);
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default doctorsReducer;
