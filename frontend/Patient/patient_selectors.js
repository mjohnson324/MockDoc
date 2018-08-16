export const userDataIsPresent = (user) => {
    if (user.appointment_ids === undefined) {
      return false;
    }
    return true;
  };

  export const getPatientAppointments = (appointments, ids) => {
    let validIds = [];
    ids.forEach(id => {
      if (appointments[id].patient_id !== null) {
        validIds.push(id);
      }
    });
    return(
      validIds.map(id => {
          return appointments[id];
    }));
  };

  export const getReviewsByAppointment = (reviews, ids) => {
    const appReviews = {};
    ids.forEach(id => {
      let review = reviews[id];
      if (review !== undefined) {
        appReviews[review.appointment_id] = review;
      }
    });
    return appReviews;
  };