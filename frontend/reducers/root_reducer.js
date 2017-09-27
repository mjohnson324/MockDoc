import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import doctorsReducer from './doctors_reducer';
import filtersReducer from './filters_reducer';
import appointmentsReducer from './appointments_reducer';
import reviewsReducer from './reviews_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  filter: filtersReducer,
  doctors: doctorsReducer,
  appointments: appointmentsReducer,
  errors: errorsReducer,
  reviews: reviewsReducer,
});

export default rootReducer;
