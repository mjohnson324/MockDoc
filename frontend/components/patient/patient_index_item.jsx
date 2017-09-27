import React from 'react';
import moment from 'moment';

const PatientIndexItem = (props) => {
  const { appointment, doctor, review } = props;
  return(
    <li>
      <div>Appointment:
        <div>Reason: {`${appointment.reason}`}</div>
        <div>Time: {`${moment(appointment.start_time)
            .format("dddd, MMMM Do YYYY, h:mm a")}`}</div>
        <div>Address: {`${doctor.address}`}</div>
        <div>Doctor: {`${doctor.first_name} ${doctor.last_name}`}</div>
        <button onClick={cancel}>Cancel Appointment</button>
      </div>
      <div>Review:
        <div>Overall: {`${review.overall_rating}`}</div>
        <div>Bedside Manner: {`${review.bedside_manner}`}</div>
          <div>Wait-Time: {`${review.wait_time}`}</div>
        <p>Body: {`${review.body}`}</p>
        <button onClick={cancel}>Edit Review</button>
        <button onClick={cancel}>Delete Review</button>
      </div>
    </li>
  );
};

export default PatientIndexItem;
