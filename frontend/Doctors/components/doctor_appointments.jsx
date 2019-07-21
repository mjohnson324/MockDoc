import React from 'react';
import AppointmentsTable from '../../Appointments/components/appointments_table';

const DoctorAppointments = ({ apps, address, daysToRender }) => {
  const { today, tomorrow, dayAfter, dayFour } = daysToRender;
  return(
    <div className="doc-appointments">
      <h3>Book an Appointment</h3>
      <p>Address: {`${address}`}</p>
      <div className="doc-scroll-bar">
        <button>&#8592;</button>
        <div className="doc-appointments-days">{`${today}`.slice(0, 10)}</div>
        <div className="doc-appointments-days">{`${tomorrow}`.slice(0, 10)}</div>
        <div className="doc-appointments-days">{`${dayAfter}`.slice(0, 10)}</div>
        <div className="doc-appointments-days">{`${dayFour}`.slice(0,10)}</div>
        <button>&#8594;</button>
      </div>
      <div className="doc-profile-schedule">
        <AppointmentsTable appsByDays={apps} />
      </div>
    </div>
  );
};

export default DoctorAppointments;
