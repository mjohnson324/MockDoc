import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
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
