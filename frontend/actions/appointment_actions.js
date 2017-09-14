import * as APIUtil from '../util/appointment_util';
import { receiveErrors } from './error_actions';


export const RECEIVE_APPOINTMENT = 'RECEIVE_APPOINTMENT';

export const receiveAppointment = appointment => {
  return {
    type: RECEIVE_APPOINTMENT,
    appointment,
  };
};

export const getAppointment = appointment => dispatch => {
  return APIUtil.getApp(appointment).then(app => (
    dispatch(receiveAppointment(app))
  ));
};

export const updateAppointment = appointment => dispatch => {
  return APIUtil.updateApp(appointment).then(app => (
    dispatch(receiveAppointment(app))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};
