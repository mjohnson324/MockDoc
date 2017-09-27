import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAppointment } from '../../actions/appointment_actions';
import { getUser } from '../../actions/session_actions';
import { getUserReviews, getUserAppointments } from '../../reducers/selectors';
import PatientProfile from './patient_profile';

const mapStatetoProps = (state) => {
  const user = state.session.currentUser;
  return {
    user: state.session.currentUser,
    reviews: getUserReviews(state.reviews, user.review_ids),
    appointments: getUserAppointments(state.appointments, user.appointment_ids),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAppointment: appointment => dispatch(updateAppointment(appointment)),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(PatientProfile));
