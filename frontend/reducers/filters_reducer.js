import { merge } from 'lodash';
import { UPDATE_FILTER } from '../actions/filter_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/doctor_actions';

const defaultFilters = Object.freeze({
  specialty: "none",
  address: "",
  status: "loading"
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      return merge({}, state, action.filter);
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, { status: action.status } )
    default:
      return state;
  }
};

export default filtersReducer;
