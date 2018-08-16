import { merge } from 'lodash';
import { UPDATE_FILTER, RECEIVE_SEARCH_RESULTS } from './search_actions';

const defaultFilters = Object.freeze({
  specialty: "none",
  address: "",
  status: "loading",
  googleLoaded: false,
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
