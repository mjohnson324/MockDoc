import React from 'react';
import moment from 'moment';

const PatientAppointment = (props) => {
  return(
    <li>
      <div>Reason: {`${props.appointment.reason}`}</div>
      <div>Time: {`${moment(props.appointment.start_time)
        .format("dddd, MMMM Do YYYY, h:mm a")}`}</div>
      <div>Address: {`${props.appointment.address}`}</div>
      <div>Doctor: {`${props.appointment.doctor_name}`}</div>
      <button onClick={props.callback}>Cancel Appointment</button>
    </li>
  );
};

export default PatientAppointment;
