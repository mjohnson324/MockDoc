import { values } from 'lodash';
import moment from 'moment';
import { filter } from 'lodash';

export const selectDoctors = doctors => values(doctors);

export const selectErrors = errors => values(errors);

export const getItems = (items, itemIds) => {
  return itemIds.map(id => items[id]);
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

export const sortAppointmentsByDoctor = (doctors, appointments) => {
  const sortedAppointments = {};
  doctors.forEach(doctor => {
    sortedAppointments[doctor.id] = getItems(
      appointments, doctor.appointment_ids
    );
  });
  return sortedAppointments;
};

export const sortAppointmentsByDay = (apps, dates) => {
  const appsByDays = [];
  dates.forEach(day => {
    appsByDays.push(filter(apps, (app) => { return(
      moment(app.start_time).format("D") === day.getDate().toString());
    }));
  });
  return appsByDays;
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