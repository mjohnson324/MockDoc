import React from 'react';
import { Link } from 'react-router-dom';
import { DisplayDayAppointments } from './appointment_helpers';

const AppointmentsTable = ({ appsByDays }) => {
  return(
    <section className="doc-schedule">
      appsByDays.map(day => (
        <DisplayDayAppointments day={day} />; );
    </section>
  );
};

export default AppointmentsTable;
