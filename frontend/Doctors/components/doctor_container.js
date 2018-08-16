import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getADoctor } from '../doctor_actions';
import { getDoctorItems, isDoctorDataLoaded } from '../doctor_selectors';
import Doctor from './doctor';

const mapStatetoProps = (state, ownProps) => {
  let doctor = state.doctors[ownProps.match.params.id];
  let docAppointments = [];
  let docReviews = [];
  if(isDoctorDataLoaded(doctor)) {
    docAppointments = getDoctorItems(state.appointments, doctor.appointment_ids);
    docReviews = getDoctorItems(state.reviews, doctor.review_ids);
  }
  doctor = doctor === undefined ? defaultDoc : doctor;
  return {
    doctor: doctor,
    appointments: docAppointments,
    reviews: docReviews,
    googleLoaded: state.filter.googleLoaded,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getADoctor: doctor => dispatch(getADoctor(doctor)),
 };
};

const defaultDoc = {
  address: '',
  last_name: '',
  first_name: '',
  degree: '',
  education: '',
  specialties: [],
  average_rating: 0
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Doctor));
