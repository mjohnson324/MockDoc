import * as APIUtil from '../util/doctor_api_utils';

export const RECEIVE_DOCTORS_AND_APPOINTMENTS = 'RECEIVE_DOCTORS_AND_APPOINTMENTS';
export const RECEIVE_DOCTOR_AND_APPOINTMENTS = 'RECEIVE_DOCTOR_AND_APPOINTMENTS';

export const receiveDoctorsAndApps = doctorsAndApps => {
  return {
    type: RECEIVE_DOCTORS_AND_APPOINTMENTS,
    doctors: doctorsAndApps.doctors,
    appointments: doctorsAndApps.appointments,
  };
};

export const receiveDoctorAndApps = doctorAndApps => {
  return {
    type: RECEIVE_DOCTOR_AND_APPOINTMENTS,
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
    dispatch(receiveDoctorAndApps(doc))
  ));
};
