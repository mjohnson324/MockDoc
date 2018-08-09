import React from 'react';
import moment from 'moment';
import { renderStars } from '../../reducers/selectors';

export const DoctorReviewsItem = (props) => {
  const { review } = props;
  let reviewParagraph = review.body;
  if (review.body === null) {
    reviewParagraph = '';
  }
  return(
    <li className="review-container">
      <div className="review-container-date">
        {`${moment(review.created_at).format("MMMM Do, YYYY")}`}
      </div>
      <div className="review-container-data">
        <div className="review-container-ratings">
          <p className="stars">Overall Rating: {renderStars(review.overall_rating)}</p>
          <p className="stars">Wait Time: {renderStars(review.wait_time)}</p>
          <p className="stars">Bedside Manner: {renderStars(review.bedside_manner)}</p>
        </div>
        <p>{`${reviewParagraph}`}</p>
      </div>
    </li>
  );
};
