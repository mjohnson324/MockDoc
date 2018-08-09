/* global $ */

export const signUp = user => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user: user}
  });
};

export const logIn = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};

export const logOut = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

export const getUser = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const userDataIsPresent = (user) => {
  if (user.appointment_ids === undefined) {
    return false;
  }
  return true;
};
