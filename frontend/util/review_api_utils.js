export const updateReview = review => {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: { review: review }
  });
};

export const getReview = reviewId => {
  return $.ajax({
    method: 'GET',
    url: `api/reviews/${reviewId}`,
  });
};

export const removeReview = reviewId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`
  });
};

export const createReview = review => {
  return $.ajax({
      method: 'POST',
      url: 'api/reviews',
      data: { review: review }
  });
};
