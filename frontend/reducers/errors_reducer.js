import { RECEIVE_APP_ERRORS } from '../actions/appointment_actions';
import { RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

import { merge } from 'lodash';

const errorsReducer  =(state = {}, action) => {
  switch(action.type) {
    case RECEIVE_APP_ERRORS:
      return 5;
    case RECEIVE_REVIEW_ERRORS:
      return 5;
    default:
      return state;
  }
};
