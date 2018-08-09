import * as APIUtil from '../util/doctor_api_utils';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS = 'RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS';
export const CLEAR_DOCTORS = 'CLEAR_DOCTORS';

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

export const receiveDoctorAndAppsAndReviews = ({ doctor, appointments, reviews }) => {
  const reviewResults = reviews ? reviews : {};
  const appResults = appointments ? appointments : {};
  
  return {
    type: RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS,
    doctor,
    appointments: appResults,
    reviews: reviewResults,
  };
};

export const getDoctors = filters => dispatch => {
  return APIUtil.getDocs(filters).then(docs => (
    dispatch(receiveSearchResults(docs))
  ));
};

export const getADoctor = doctor => dispatch => {
  return APIUtil.getDoc(doctor).then(doc => (
    dispatch(receiveDoctorAndAppsAndReviews(doc))
  ));
};
