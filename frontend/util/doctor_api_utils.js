/* global $ */

export const getDoc = doctorId => {
  return $.ajax({
    method: 'GET',
    url: `api/doctors/${doctorId}`,
  });
};

export const getDocs = data => {
  return $.ajax({
    method: 'GET',
    url: 'api/doctors',
    data
  });
};

export const isDoctorDataLoaded = (doctor) => {
  if (doctor === undefined || doctor.review_ids === undefined) {
    return false;
  }
  return true;
}