import * as APIUtil from '../util/review_api_utils';
import { receiveErrors } from './error_actions';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW  = 'REMOVE_REVIEW';

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const removeReview = id => {
  return {
    type: REMOVE_REVIEW,
    id: parseInt(id, 10),
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

export const deleteReview = reviewId => dispatch => {
  return APIUtil.removeReview(reviewId).then(id => (
    dispatch(removeReview(id))
  ));
};
