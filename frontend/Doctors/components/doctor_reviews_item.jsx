import React from 'react';
import moment from 'moment';
import { renderStars } from '../doctor_selectors';

export const DoctorReviewsItem = (props) => {
  const { review } = props;
  let reviewParagraph = review.body;
  if (review.body === null) {
    reviewParagraph = '';
  }
  return(
    <li className="review-container">
      <div className="review-container-date">
        {`${moment(review.updated_at).format("MMMM Do, YYYY")}`}
      </div>
      <div className="review-container-data">
        <div className="review-container-ratings">
          <p>Overall Rating: </p>
          <p className="stars">{renderStars(review.overall_rating)}</p>
          <p>Wait Time: </p>
          <p className="stars">{renderStars(review.wait_time)}</p>
          <p>Bedside Manner: </p>
          <p className="stars">{renderStars(review.bedside_manner)}</p>
        </div>
        <p>{`${reviewParagraph}`}</p>
      </div>
    </li>
  );
};
