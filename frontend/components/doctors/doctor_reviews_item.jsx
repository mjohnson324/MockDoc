import React from 'react';

export const DoctorReviewsItem = (props) => {
  const { review } = props;
  return(
    <li>
      <div>
        <span>{`${review.overal_rating}`}</span>
        <span>{`${review.wait_time}`}</span>
        <span>{`${review.bedside_manner}`}</span>
      </div>
      <p>{`${review.body}`}</p>
    </li>
  );
};
