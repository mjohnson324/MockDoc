import React from 'react';
import moment from 'moment';
import { renderStars } from '../doctor_selectors';

const reviewParagraph = paragraph => {
  if (paragraph !== null && paragraph !== '') {
    return <p className="review-paragraph">{`${paragraph}`}</p>;
  }
};

export const DoctorReviewsItem = ({ review }) => {
  return(
    <li className="review-container">
      <label className="review-date">Date: {`${moment(review.updated_at).format("MMMM Do, YYYY")}`}</label>
      <div className="review-container-ratings">
        <div>
          <label>Overall Rating:</label>
          <p className="stars">{renderStars(review.overall_rating)}</p>
        </div>
        <div>
          <label>Wait Time:</label>
          <p className="stars">{renderStars(review.wait_time)}</p>
        </div>
        <div>
          <label>Bedside Manner:</label>
          <p className="stars">{renderStars(review.bedside_manner)}</p>
        </div>
      </div>
      {reviewParagraph(review.body)}
    </li>
  );
};
