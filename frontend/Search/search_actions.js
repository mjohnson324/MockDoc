import { getDocs } from './search_api_utils';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_DOCTORS = 'CLEAR_DOCTORS';

export const changeFilter = (filter) => {
  return {
    type: UPDATE_FILTER,
    filter
  };
};

export const clearDoctors = () => {
  return {
    type: CLEAR_DOCTORS
  };
};

export const receiveSearchResults = ({ doctors, appointments }) => {
  let docResults, status;
  if(doctors === undefined) {
    docResults = {};
    status = 'failure';
  } else {
    docResults = doctors;
    status = 'success';
  } 
  const appResults = appointments === undefined ? {} : appointments;
  return {
    type: RECEIVE_SEARCH_RESULTS,
    doctors: docResults,
    appointments: appResults, 
    status
  };
};

export const getDoctors = filters => dispatch => {
  return getDocs(filters).then(docs => (
    dispatch(receiveSearchResults(docs))
  ));
};