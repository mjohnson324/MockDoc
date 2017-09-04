import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const recieveReviewErrors = errors => {
  return {
      type: RECEIVE_ERRORS,
      errors
  };
};

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const updateReview = review => {
  return {
    type: UPDATE_REVIEW,
    review
  };
};
