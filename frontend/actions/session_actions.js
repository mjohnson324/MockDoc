import * as APIUtil from '../util/session_api_utils';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const CLEAR_STATE = 'CLEAR_STATE';

export const clearState = () => {
  return { type: CLEAR_STATE };
};

export const receiveCurrentUser = state => {
    let {doctors, reviews, appointments } = state;
    let userDocs = doctors === undefined ? {} : doctors;
    let userApps = appointments === undefined ? {} : appointments;
    let userReviews = reviews === undefined ? {} : reviews;

    return {
      type: RECEIVE_CURRENT_USER,
      session: { currentUser: state.session},
      appointments: userApps,
      doctors: userDocs,
      reviews: userReviews,
    };
};

export const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

export const logIn = user => dispatch => {
  return APIUtil.logIn(user).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const logOut = () => dispatch => {
  return APIUtil.logOut().then(user => {
      dispatch(removeCurrentUser());
    });
};

export const signUp = user => dispatch => {
  return APIUtil.signUp(user).then(newUser => (
    dispatch(receiveCurrentUser(newUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const getUser = id => dispatch => {
  return APIUtil.getUser(id).then(user => (
    dispatch(receiveCurrentUser(user))
  ));
};
