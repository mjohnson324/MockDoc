import React from 'react';

import DoctorReviewsItem from './doctor_reviews_item';

export const DoctorReviews = ({ reviews }) => {
  return(
    <ul>
      {reviews.map(review => {
        return(
          <DoctorReviewsItem
            review={review}
            key={review.id}/>
        );
      })}
    </ul>
  );
};
