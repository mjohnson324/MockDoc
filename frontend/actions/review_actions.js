import * as APIUtil from '../util/review_api_utils';
import { receiveErrors } from './error_actions';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const changeReview = review => dispatch => {
  return APIUtil.updateReview(review).then(rev => (
    dispatch(receiveReview(rev))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const createReview = review => dispatch => {
  return APIUtil.createReview(review).then(rev => (
    dispatch(receiveReview(rev))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const getReview = id => dispatch => {
  return APIUtil.getReview(id).then(rev => (
    dispatch(receiveReview(rev))
  ));
};

export const deleteReview = id => dispatch => {
  return APIUtil.removeReview(id);
};
