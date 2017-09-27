import { RECEIVE_APPOINTMENT } from '../actions/appointment_actions';
import {
      RECEIVE_DOCTORS_AND_APPOINTMENTS,
      RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS } from '../actions/doctor_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const appointmentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_DOCTORS_AND_APPOINTMENTS || RECEIVE_CURRENT_USER:
      return action.appointments;
    case RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS:
      return merge({}, state, action.appointments);
    case RECEIVE_APPOINTMENT:
      newState = { [action.appointment.id]: action.appointment };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default appointmentsReducer;
