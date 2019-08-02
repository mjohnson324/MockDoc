import { merge } from 'lodash';
import { UPDATE_FILTER, RECEIVE_SEARCH_RESULTS } from './search_actions';
import moment from 'moment';

const defaultFilters = Object.freeze({
  specialty: "none",
  address: "",
  status: "loading",
  day: moment().get('date'),
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
