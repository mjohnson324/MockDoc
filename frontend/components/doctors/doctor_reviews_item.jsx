import React from 'react';
import moment from 'moment';

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
          <p>Overall Rating: {`${review.overall_rating}`}</p>
          <p>Wait Time: {`${review.wait_time}`}</p>
          <p>Bedside Manner: {`${review.bedside_manner}`}</p>
        </div>
        <p>{`${reviewParagraph}`}</p>
      </div>
    </li>
  );
};
