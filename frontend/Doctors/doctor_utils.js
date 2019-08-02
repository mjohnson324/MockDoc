/* global $ */
import moment from 'moment';

export const getDoc = doctorId => {
  return $.ajax({
    method: 'GET',
    url: `api/doctors/${doctorId}`,
  });
};

export const getDay = (offset, hour =  moment().get('hour')) => {
  const cY = moment().get('year');
  const cM = moment().get('month');
  const cD = moment().get('date') + offset;
  return moment().year(cY).month(cM).date(cD).hour(hour)._d;
}

export const getDayRange = (offset) => {
  const today = getDay(offset);
  const tomorrow = getDay(offset + 1, 23)
  const dayAfter = getDay(offset + 2, 23)
  const dayFour = getDay(offset + 3, 23)
  return [today, tomorrow, dayAfter, dayFour];
};
