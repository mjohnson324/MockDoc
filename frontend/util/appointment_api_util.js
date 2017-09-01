export const updateApp = appointment => {
  return $.ajax({
    method: 'PATCH',
    url: `api/appointments/${appointment.id}`,
    data: { appointment: appointment }
  });
};

export const getApp = appId => {
  return $.ajax({
    method: 'GET',
    url: `api/appointments/${appId}`,
  });
};
