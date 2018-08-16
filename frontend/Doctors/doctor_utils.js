/* global $ */
import moment from 'moment';

export const getDoc = doctorId => {
  return $.ajax({
    method: 'GET',
    url: `api/doctors/${doctorId}`,
  });
};

export const getDayRange = () => {
  const cY = moment().get('year');
  const cM = moment().get('month');
  const cD = moment().get('date');
  const cH = moment().get('hour');
  const today = moment().year(cY).month(cM).date(cD).hour(cH);
  const tomorrow = moment().year(cY).month(cM).date(cD + 1).hour(23);
  const dayAfter = moment().year(cY).month(cM).date(cD + 2).hour(23);
  const dayFour = moment().year(cY).month(cM).date(cD + 3).hour(23);

  return [today._d, tomorrow._d, dayAfter._d, dayFour._d];
};
