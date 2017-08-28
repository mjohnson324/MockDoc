import { merge } from 'lodash';
import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  specialty: "Family Physician",
  address: "New York",
});

function checkDefaults(filter) {
  if (filter.specialty === '') {
    filter.specialty = defaultFilters.specialty;
  }

  if (filter.address === '') {
    filter.address = defaultFilters.address;
  }

  return filter;
}

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      let newFilter = checkDefaults(action.filter);
      return merge({}, state, newFilter);
    default:
      return state;
  }
};

export default filtersReducer;
