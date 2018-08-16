import React from 'react';
import { DoctorReviewsItem } from './doctor_reviews_item';

const DoctorReviews = ({ reviews }) => {
  return(
    <ul className="doc-reviews">
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

export default DoctorReviews;
