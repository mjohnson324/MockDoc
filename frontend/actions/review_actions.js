import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';


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
