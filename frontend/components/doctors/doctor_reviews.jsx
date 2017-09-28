import React from 'react';
import { DoctorReviewsItem } from './doctor_reviews_item';

export const DoctorReviews = ({ reviews }) => {
  return(
    <ul className="docReviews">
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
