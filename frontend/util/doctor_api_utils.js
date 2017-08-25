export const getDoc = doctorId => {
  return $.ajax({
    method: 'GET',
    url: `api/doctors/${doctorId}`,
  });
};
