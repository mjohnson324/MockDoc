import React from 'react';
import { Link } from 'react-router-dom';
import { DisplayDayAppointments } from './appointment_helpers';

const AppointmentsTable = ({ appsByDays }) => {
  return(
    <section className="doc-schedule">
      <DisplayDayAppointments day={appsByDays[0]} />
      <DisplayDayAppointments day={appsByDays[1]} />
      <DisplayDayAppointments day={appsByDays[2]} />
    </section>
  );
};

export default AppointmentsTable;
