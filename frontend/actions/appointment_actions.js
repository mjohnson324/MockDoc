import * as APIUtil from '../util/appointment_util';
import { receiveErrors } from './error_actions';


export const RECEIVE_APPOINTMENT_AND_REVIEW = 'RECEIVE_APPOINTMENT_AND_REVIEW';

export const receiveAppointment = ({appointment, review}) => {
  const reviewResults = review ? review : {};

  return {
    type: RECEIVE_APPOINTMENT_AND_REVIEW,
    appointment,
    review: reviewResults
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
