import { merge } from 'lodash';
import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  specialty: "Family Physician",
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      let newFilter = action.filter;
      if (newFilter.specialty === '') {
        newFilter.specialty = "Family Physician";
      }
      return merge({}, state, newFilter);
    default:
      return state;
  }
};

export default filtersReducer;
