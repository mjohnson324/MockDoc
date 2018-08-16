export const selectReview = (reviews, appointmentId) => {
  let review = {
    overall_rating: '',
    wait_time: '',
    bedside_manner: '',
    body: '',
  };
  for (let revId in reviews) {
    if (reviews[revId]["appointment_id"] === parseInt(appointmentId)) {
      review = reviews[revId];
      break;
    }
  }
  return review;
};