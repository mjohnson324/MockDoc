import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { renderStars } from '../../Doctors/doctor_selectors';

const PatientIndexItem = (props) => {
  const { appointment, review, cancel, removeReview } = props;
  return(
    <li className="appointment-data">
      <div className="patient-appointment-info">
        <div className="info-title">Appointment:</div>
        <div>Time: {`${moment(appointment.start_time)
            .format("dddd, MMMM Do YYYY, h:mm a")}`}</div>
        <div>Address: {`${appointment.address}`}</div>
        <div>Doctor: {`${appointment.first_name} ${appointment.last_name}`}</div>
        <div>Reason: {`${appointment.reason}`}</div>
      </div>
      {appointmentButtons(appointment, review, cancel)}
      {reviewPortion(review, removeReview, appointment)}
    </li>
  );
};

const reviewPortion = (review, removeReview, appointment) => {
  if (review !== undefined) {
    return(
      <div className="patient-review-info">
        <div className="review-body">
          <div className="info-title left-align">Review:</div>
          <div>Overall: {renderStars(review.overall_rating)}</div>
          <div>Bedside Manner: {renderStars(review.bedside_manner)}</div>
          <div>Wait-Time: {renderStars(review.wait_time)}</div>
        </div>
        <div className="review-buttons">
          <div>
            <button className="remove-review-margin" onClick={removeReview}>Delete Review</button>
            <Link to={`/review/appointment-${appointment.id}`}>Edit Review</Link>
          </div>
        </div>
        {reviewBody(review.body)}
      </div>
    );
  }
};

const reviewBody = body => {
  if (body !== null && body !== '') {
    return <p className="top-margin">Details: {`${body}`}</p>;
  }
};

const appointmentButtons = (appointment, review, callback) => {
  const startTime = moment(appointment.start_time);
  if (startTime._d > new Date()) {
    return <button className="write-review-button" onClick={callback}>Cancel Appointment</button>;
  } else if (review === undefined) {
    return <Link className="write-review-button" to={`/review/appointment-${appointment.id}`}>
             Write Review
           </Link>;
  }
};

export default PatientIndexItem;
