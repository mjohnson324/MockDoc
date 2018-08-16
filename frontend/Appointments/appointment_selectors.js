import { filter } from 'lodash';
import moment from 'moment';

export const sortAppointmentsByDay = (apps, dates) => {
  const appsByDays = [];
  dates.forEach(day => {
    appsByDays.push(filter(apps, (app) => { return(
      moment(app.start_time).format("D") === day.getDate().toString());
    }));
   });
  return appsByDays;
};