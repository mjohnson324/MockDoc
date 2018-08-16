import { getDoc } from './doctor_utils';

export const RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS = 'RECEIVE_DOCTOR_AND_APPS_AND_REVIEWS';

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

export const getADoctor = doctor => dispatch => {
  return getDoc(doctor).then(doc => (
    dispatch(receiveDoctorAndAppsAndReviews(doc))
  ));
};
