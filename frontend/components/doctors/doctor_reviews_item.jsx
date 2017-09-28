import React from 'react';

export const DoctorReviewsItem = (props) => {
  const { review } = props;
  let reviewParagraph = review.body;
  if (review.body === null) {
    reviewParagraph = '';
  }
  return(
    <li>
      <div>
        <span>Overall Rating: {`${review.overall_rating}`}</span>
        <span>Wait Time: {`${review.wait_time}`}</span>
        <span>Bedside Manner: {`${review.bedside_manner}`}</span>
      </div>
      <p>{`${reviewParagraph}`}</p>
    </li>
  );
};
