export const getDoc = doctorId => {
  return $.ajax({
    method: 'GET',
    url: `api/doctors/${doctorId}`,
  });
};

export const getDocs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/doctors',
  });
};
