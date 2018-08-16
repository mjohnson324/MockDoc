export const isDoctorDataLoaded = (doctor) => {
    if (doctor === undefined || doctor.review_ids === undefined) {
      return false;
    }
    return true;
};

export const degreeCheck = (degree) => {
  return degree === null ? "none" : degree;
};

export const getDoctorItems = (items, itemIds) => {
  return itemIds.map(id => items[id]);
};

export const renderStars = (rating) => {
  if (rating === "Not rated") {
    return rating;
  } else {
    let ratingNumber = Math.round(rating);
    let starRating = '';
    for (let i = 0; i < 5; i ++) {
      if (ratingNumber > 0) {
        starRating += '\u2605';
        ratingNumber -= 1;
      }  else {
        starRating += '\u2606';
      }
    }
    return starRating;
  }
};