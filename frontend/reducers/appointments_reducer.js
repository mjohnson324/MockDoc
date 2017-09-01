import {
      SCHEDULE_APPOINTMENT,
      RECEIVE_APPOINTMENT,
      RECEIVE_APP_ERRORS } from '../actions/appointment_actions';

import {
      RECEIVE_DOCTORS_AND_APPOINTMENTS,
      RECEIVE_DOCTOR_AND_APPOINTMENTS } from '../actions/doctor_actions';

import { merge } from 'lodash';

const appointmentsReducer = (state = { errors: [] }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_DOCTORS_AND_APPOINTMENTS:
    if (action.appointments) {
      const errors = { errors: state.errors };
      return merge({}, errors, action.appointments);
    } else {
      return merge({}, state, action.appointments);
    }
    case RECEIVE_DOCTOR_AND_APPOINTMENTS:
      return merge({}, state, action.appointments);
    case RECEIVE_APPOINTMENT:
      newState = { [action.appointment.id]: action.appointment };
      return merge({}, state, newState);
    case SCHEDULE_APPOINTMENT:
      newState = { [action.appointment.id]: action.appointment };
      return merge({}, state, newState);
    case RECEIVE_APP_ERRORS:
    const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default appointmentsReducer;
