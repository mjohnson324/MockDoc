import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { renderStars } from '../../Doctors/doctor_selectors';

const PatientIndexItem = (props) => {
  const { appointment, review, cancel, removeReview } = props;
  return(
    <li className="appointment-data">
      <div className="patient-info">
        <h4 className="info-title">Appointment:</h4>
        <div><b>Time:</b> {`${moment(appointment.start_time)
            .format("dddd, MMMM Do YYYY, h:mm a")}`}</div>
        <div><b>Address:</b> {`${appointment.address}`}</div>
        <div><b>Doctor:</b> {`${appointment.first_name} ${appointment.last_name}`}</div>
        <div><b>Reason:</b> {`${appointment.reason}`}</div>
      </div>
      {reviewPortion(review, removeReview, appointment)}
      {appointmentButtons(appointment, review, cancel)}
    </li>
  );
};

const reviewPortion = (review, removeReview, appointment) => {
  if (review !== undefined) {
    return(
      <div className="patient-info">
        <div className="review-body">
          <h4 className="info-title left-align">Review:</h4>
          <div><b>Overall:</b> {renderStars(review.overall_rating)}</div>
          <div><b>Bedside Manner:</b> {renderStars(review.bedside_manner)}</div>
          <div><b>Wait-Time:</b> {renderStars(review.wait_time)}</div>
        </div>
        {reviewBody(review.body)}
        <div className="review-buttons">
          <button onClick={removeReview}>Delete Review</button>
          <Link to={`/review/appointment-${appointment.id}`}>Edit Review</Link>
        </div>
      </div>
    );
  }
};

const reviewBody = body => {
  if (body !== null && body !== '') {
    return <p className="review-body-margin"><b>Details:</b> {`${body}`}</p>;
  }
};

const appointmentButtons = (appointment, review, callback) => {
  const startTime = moment(appointment.start_time);
  if (startTime._d > new Date()) {
    return(
      <div className="unreviewed-appointment">
        <button className="write-review-button" onClick={callback}>Cancel Appointment</button>
      </div>
    );
  } else if (review === undefined) {
    return(
      <div className="unreviewed-appointment">
        <Link className="write-review-button" to={`/review/appointment-${appointment.id}`}>
          Write Review
        </Link>
      </div>
    );
  }
};

export default PatientIndexItem;
