/* global $ */

export const getDocs = data => {
    return $.ajax({
      method: 'GET',
      url: 'api/doctors',
      data
    });
  };