import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import doctorsReducer from './doctors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  doctors: doctorsReducer,
});

export default rootReducer;
