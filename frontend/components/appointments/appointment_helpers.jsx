import React from 'react';
import moment from 'moment';
import { filter } from 'lodash';

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

export const sortAppointmentsByDoctor = (doctors, appointments) => {
  const sortedAppointments = {};
  doctors.forEach(doctor => {
    sortedAppointments[doctor.id] = filter(appointments, ['doctor_id', doctor.id]);
  });
  return sortedAppointments;
};

export const sortAppointmentsByDay = (apps, dates) => {
  const appsByDays = [];
  dates.forEach(day => {
    appsByDays.push(filter(apps, (app) => { return(
      moment(app.start_time).format("D") === day.getDate().toString()); }
    ));
  });
  return appsByDays;
};

export const DisplayDayAppointments = ({ day }) => {
  return(
    <ul>
      {day.map(app => (
        <li key={app.id}>
          {`${moment(app.start_time).format("h:mm a")}`}
        </li>))}
    </ul>
  );
};
