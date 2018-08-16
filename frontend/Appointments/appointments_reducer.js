import { RECEIVE_APPOINTMENT_AND_REVIEW } from './appointment_actions';
import { RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS } from '../Doctors/doctor_actions';
import { RECEIVE_CURRENT_USER } from '../Session/session_actions';
import { RECEIVE_SEARCH_RESULTS } from '../Search/search_actions';
import { merge } from 'lodash';

const appointmentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.appointments);
    case RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS:
      return merge({}, state, action.appointments);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.appointments);
    case RECEIVE_APPOINTMENT_AND_REVIEW:
      newState = { [action.appointment.id]: action.appointment };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default appointmentsReducer;
