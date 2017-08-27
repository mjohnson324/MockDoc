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
