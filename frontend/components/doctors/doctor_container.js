import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getADoctor } from '../../actions/doctor_actions';
import Doctor from './doctor';
import { getItems } from '../../reducers/selectors';
import { isDoctorDataLoaded } from '../../util/doctor_api_utils';

const mapStatetoProps = (state, ownProps) => {
  let doctor = state.doctors[ownProps.match.params.id];
  let docAppointments = [];
  let docReviews = [];
  if(isDoctorDataLoaded(doctor)) {
    docAppointments = getItems(state.appointments, doctor.appointment_ids);
    docReviews = getItems(state.reviews, doctor.review_ids);
  }
  doctor = doctor === undefined ? defaultDoc : doctor;
  return {
    doctor: doctor,
    appointments: docAppointments,
    reviews: docReviews,
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
