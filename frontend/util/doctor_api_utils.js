export const getDoc = doctor => {
  return $.ajax({
    method: 'GET',
    url: `api/doctors/${doctor.id}`,
  });
};
