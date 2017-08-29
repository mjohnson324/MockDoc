import { merge } from 'lodash';
import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  specialty: "Family Physician",
  address: "New York",
  date: new Date(),
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      return merge({}, state, action.filter);
    default:
      return state;
  }
};

export default filtersReducer;
