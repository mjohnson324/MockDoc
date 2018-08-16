import { combineReducers } from 'redux';
import sessionReducer from '../Session/session_reducer';
import errorsReducer from '../Errors/errors_reducer';
import doctorsReducer from '../Doctors/doctors_reducer';
import filtersReducer from '../Search/filters_reducer';
import appointmentsReducer from '../Appointments/appointments_reducer';
import reviewsReducer from '../Reviews/reviews_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  filter: filtersReducer,
  doctors: doctorsReducer,
  appointments: appointmentsReducer,
  errors: errorsReducer,
  reviews: reviewsReducer,
});

export default rootReducer;
