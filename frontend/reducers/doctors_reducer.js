import {
  RECEIVE_DOCTORS_AND_APPOINTMENTS,
  RECEIVE_DOCTOR_AND_APPOINTMENTS } from '../actions/doctor_actions';
import { merge } from 'lodash';

const doctorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_DOCTORS_AND_APPOINTMENTS:
      return action.doctors;
    case RECEIVE_DOCTOR_AND_APPOINTMENTS:
      newState = { [action.doctor.id]: action.doctor };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default doctorsReducer;
