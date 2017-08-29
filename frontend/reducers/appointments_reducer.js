import {
        RECEIVE_APPOINTMENTS,
        SCHEDULE_APPOINTMENT } from '../actions/appointment_actions';

import { merge } from 'lodash';

const appointmentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_APPOINTMENTS:
      return action.appointments;
    case SCHEDULE_APPOINTMENT:
      const changedApp = action.appointment;
      newState = { [changedApp.id]: changedApp };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default appointmentsReducer;
