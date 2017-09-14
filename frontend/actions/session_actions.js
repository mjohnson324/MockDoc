import * as APIUtil from '../util/session_api_utils';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
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
      dispatch(receiveCurrentUser(null));
    });
};

export const signUp = user => dispatch => {
  return APIUtil.signUp(user).then(newUser => (
    dispatch(receiveCurrentUser(newUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const getUser = user => dispatch => {
  return APIUtil.getUser(user).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ));
};
