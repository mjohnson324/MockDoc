import * as APIUtil from '../util/appointment_api_util';

export const SCHEDULE_APPOINTMENT = 'SCHEDULE_APPOINTMENT';
export const RECEIVE_APPOINTMENT = 'RECEIVE_APPOINTMENT';

export const RECEIVE_APP_ERRORS = 'RECEIVE_APP_ERRORS'; // DRY code later
export const receiveAppErrors = errors => {
  return {
    type: RECEIVE_APP_ERRORS,
    errors
  };
};

export const receiveAppointment = appointment => {
  return {
    type: RECEIVE_APPOINTMENT,
    appointment,
  };
};

export const scheduleAppointment = appointment => {
  return {
    type: SCHEDULE_APPOINTMENT,
    appointment
  };
};

export const getAppointment = appointment => dispatch => {
  return APIUtil.getApp(appointment).then(app => (
    dispatch(receiveAppointment(app))
  ));
};

export const updateAppointment = appointment => dispatch => {
  return APIUtil.updateApp(appointment).then(app => (
    dispatch(scheduleAppointment(appointment))
  ), err => (
    dispatch(receiveAppErrors(err.responseJSON))
  ));
};
