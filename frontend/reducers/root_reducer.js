import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import doctorsReducer from './doctors_reducer';
import filtersReducer from './filters_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  doctors: doctorsReducer,
  filter: filtersReducer,
});

export default rootReducer;
