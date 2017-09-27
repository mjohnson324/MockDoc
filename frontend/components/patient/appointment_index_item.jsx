import React from 'react';
import moment from 'moment';

const PatientAppointment = (props) => {
  const { appointment, doctor, callback } = props;
  return(
    <li>
      <div>Reason: {`${appointment.reason}`}</div>
      <div>Time: {`${moment(appointment.start_time)
        .format("dddd, MMMM Do YYYY, h:mm a")}`}</div>
      <div>Address: {`${doctor.address}`}</div>
      <div>Doctor: {`${doctor.first_name} ${doctor.last_name}`}</div>
      <button onClick={callback}>Cancel Appointment</button>
    </li>
  );
};

export default PatientAppointment;
