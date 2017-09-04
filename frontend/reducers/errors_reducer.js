import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import { merge } from 'lodash';

const errorsReducer  =(state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      return 5;
    case CLEAR_ERRORS:
      return 5;
    default:
      return state;
  }
};
