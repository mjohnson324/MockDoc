import * as APIUtil from '../util/doctor_api_utils';

export const RECEIVE_DOCTORS_AND_APPOINTMENTS = 'RECEIVE_DOCTORS_AND_APPOINTMENTS';
export const RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS = 'RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS';

export const receiveDoctorsAndApps = ({ doctors, appointments }) => {
  const docResults = doctors ? doctors : {};
  const appResults = appointments ? appointments : {};

  return {
    type: RECEIVE_DOCTORS_AND_APPOINTMENTS,
    doctors: docResults,
    appointments: appResults,
  };
};

export const receiveDoctorAndAppsAndReviews = doctorAndApps => {
  return {
    type: RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS,
    doctor: doctorAndApps.doctor,
    appointments: doctorAndApps.appointments,
  };
};

export const getDoctors = filters => dispatch => {
  return APIUtil.getDocs(filters).then(docs => (
    dispatch(receiveDoctorsAndApps(docs))
  ));
};

export const getADoctor = doctor => dispatch => {
  return APIUtil.getDoc(doctor).then(doc => (
    dispatch(receiveDoctorAndAppsAndReviews(doc))
  ));
};
