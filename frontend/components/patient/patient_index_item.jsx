import React from 'react';
import moment from 'moment';

const PatientIndexItem = (props) => {
  const { appointment, doctor, review, cancel, removeReview } = props;
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
      reviewPortion(review, removeReview, appointment)
    </li>
  );
};

const reviewPortion = (review, removeReview, appointment) => {
  if (review !== undefined) {
    return(
      <div>Review:
        <div>Overall: {`${review.overall_rating}`}</div>
        <div>Bedside Manner: {`${review.bedside_manner}`}</div>
        <div>Wait-Time: {`${review.wait_time}`}</div>
        <p>Body: {`${review.body}`}</p>
        <Link to={`/review/appointment-${appointment.id}`}>Edit Review</Link>
        <button onClick={removeReview}>Delete Review</button>
      </div>
    );
  }
};

export default PatientIndexItem;
