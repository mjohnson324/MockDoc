import * as APIUtil from '../util/appointment_api_util';

export const RECEIVE_APPOINTMENTS = 'RECEIVE_APPOINTMENTS';
export const SCHEDULE_APPOINTMENT = 'SCHEDULE_APPOINTMENT';
export const RECEIVE_APPOINTMENT = 'RECEIVE_APPOINTMENT';

export const receiveAppointments = appointments => {
  return {
    type: RECEIVE_APPOINTMENTS,
    appointments,
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
    appointment,
  };
};

export const getAppointments = filters => dispatch => {
  return APIUtil.getApps(filters).then(apps => (
    dispatch(receiveAppointments(apps))
  ));
};

export const getAppointment = appointment => dispatch => {
  return APIUtil.getApp(appointment).then(app => (
    dispatch(receiveAppointment(app))
  ));
};

export const updateAppointment = appointment => dispatch => {
  return APIUtil.updateApp(appointment).then(app => (
    dispatch(scheduleAppointment(appointment))
  ));
};
