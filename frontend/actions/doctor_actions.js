import * as APIUtil from '../util/doctor_api_utils';

export const RECEIVE_DOCTOR = 'RECEIVE_DOCTOR';

export const receiveDoctor = doctor => {
  return {
    type: RECEIVE_DOCTOR,
    doctor
  };
};

export const getADoctor = doctor => dispatch => {
  return APIUtil.getDoc(doctor).then(doc => (
    dispatch(receiveDoctor(doc))
  ));
};
