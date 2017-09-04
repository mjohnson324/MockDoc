import React from 'react';
import { Link } from 'react-router-dom';
import { AppointmentsDayDisplay } from './appointments_day_display';
import { sortBy } from 'lodash';

const AppointmentsTable = ({ appsByDays }) => {
  const guaranteeTimeOrder = appsByDays.map(thisDay => (
    sortBy(thisDay, 'start_time')));
  return(
    <section className="doc-schedule">
      {guaranteeTimeOrder.map((thisDay, idx) => (
        <AppointmentsDisplayDay key={idx} day={thisDay} /> ))}
    </section>
  );
};

export default AppointmentsTable;
