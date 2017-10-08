import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PatientIndexItem = (props) => {
  const { appointment, doctor, review, cancel, removeReview } = props;
  return(
    <li>
      <div className="patient-appointment-info">Appointment:
        <div>Reason: {`${appointment.reason}`}</div>
        <div>Time: {`${moment(appointment.start_time)
            .format("dddd, MMMM Do YYYY, h:mm a")}`}</div>
          <div>Address: {`${appointment.address}`}</div>
        <div>Doctor: {`${appointment.doctor_name}`}</div>
        {cancelButton(appointment, cancel)}
      </div>
      {reviewPortion(review, removeReview, appointment)}
    </li>
  );
};

const reviewPortion = (review, removeReview, appointment) => {
  if (review !== undefined) {
    return(
      <div className="patient-appointment-info">Review:
        <div>Overall: {`${review.overall_rating}`}</div>
        <div>Bedside Manner: {`${review.bedside_manner}`}</div>
        <div>Wait-Time: {`${review.wait_time}`}</div>
        {reviewBody(review.body)}
        <Link to={`/review/appointment-${appointment.id}`}>Edit Review</Link>
        <button onClick={removeReview}>Delete Review</button>
      </div>
    );
  }
};

const reviewBody = body => {
  if (body !== null) {
    return <p>Body: {`${body}`}</p>;
  }
};

const cancelButton = (appointment, callback) => {
  const startTime = moment(appointment.start_time);
  if (startTime._d > new Date()) {
    return <button onClick={callback}>Cancel Appointment</button>;
  }
};

export default PatientIndexItem;
