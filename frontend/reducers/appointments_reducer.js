import {
      SCHEDULE_APPOINTMENT,
      RECEIVE_APPOINTMENT } from '../actions/appointment_actions';

import {
      RECEIVE_DOCTORS_AND_APPOINTMENTS,
      RECEIVE_DOCTOR_AND_APPOINTMENTS } from '../actions/doctor_actions';

import { merge } from 'lodash';

const appointmentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_DOCTORS_AND_APPOINTMENTS:
      return merge({}, state, action.appointments);
    case RECEIVE_DOCTOR_AND_APPOINTMENTS:
      return merge({}, state, action.appointments);
    case RECEIVE_APPOINTMENT:
      newState = { [action.appointment.id]: action.appointment };
      return merge({}, state, newState);
    case SCHEDULE_APPOINTMENT:
      newState = { [action.appointment.id]: action.appointment };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default appointmentsReducer;
