import { values } from 'lodash';
import moment from 'moment';
import { filter } from 'lodash';

export const selectDoctors = state => values(state.doctors);
export const selectErrors = state => values(state.errors);

export const getReviews = (reviews, ids) => {
  return(
    ids.map(id => {
        return reviews[id];
      }));
};

export const getReviewsByAppointment = (reviews, ids) => {
  const appReviews = {};
  ids.forEach(id => {
    let review = reviews[id];
    if (review) {
      appReviews[review.appointment_id] = review;
    }
  });
  return appReviews;
};

export const getAppointments = (appointments, ids) => {
  return(
    ids.map(id => {
        return appointments[id];
      }));
};

export const sortAppointmentsByDoctor = (doctors, appointments) => {
  const sortedAppointments = {};
  if (doctors[0]) {
    doctors.forEach(doctor => {
      sortedAppointments[doctor.id] = getAppointments(
        appointments, doctor.appointment_ids
      );
    });
  }
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
