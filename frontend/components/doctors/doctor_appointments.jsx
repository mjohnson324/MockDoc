import React from 'react';
import AppointmentsTable from '../appointments/appointments_table';

const DoctorAppointments = ({ apps, address, daysToRender }) => {
  const { today, tomorrow, dayAfter, dayFour } = daysToRender;
  return(
    <div className="doc-appointments">
      <h3>Book an Appointment</h3>
      <p>Address: {`${address}`}</p>
      <div className="doc-scroll-bar">
        <button>L</button>
        <div>{`${today}`.slice(0, 10)}</div>
        <div>{`${tomorrow}`.slice(0, 10)}</div>
        <div>{`${dayAfter}`.slice(0, 10)}</div>
        <div>{`${dayFour}`.slice(0,10)}</div>
        <button>R</button>
      </div>
      <div>
        <AppointmentsTable appsByDays={apps} />
      </div>
    </div>
  );
};

export default DoctorAppointments;
