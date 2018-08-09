import * as APIUtil from '../util/appointment_util';
import { receiveErrors } from './error_actions';


export const RECEIVE_APPOINTMENT_AND_REVIEW = 'RECEIVE_APPOINTMENT_AND_REVIEW';

export const receiveAppointment = (data) => {
  const reviewResults = data.review === undefined ? {} : data.review;
  return {
    type: RECEIVE_APPOINTMENT_AND_REVIEW,
    appointment: data.appointment,
    review: reviewResults
  };
};

export const getAppointment = appointment => dispatch => {
  return APIUtil.getApp(appointment).then(data => (
    dispatch(receiveAppointment(data))
  ));
};

export const updateAppointment = appointment => dispatch => {
  return APIUtil.updateApp(appointment).then(data => (
    dispatch(receiveAppointment(data))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};
