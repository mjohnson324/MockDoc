import React from 'react';
import { sortBy } from 'lodash';
import { AppointmentsDayDisplay } from './appointments_day_display';

const AppointmentsTable = ({ appsByDays }) => {
  const guaranteeTimeOrder = appsByDays.map(thisDay => (
    sortBy(thisDay, 'start_time')));
  return(
    <div className="doc-schedule">
      {guaranteeTimeOrder.map((thisDay, idx) => (
        <AppointmentsDayDisplay key={idx} day={thisDay} /> ))}
    </div>
  );
};

export default AppointmentsTable;
