import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAppointment } from '../../actions/appointment_actions';
import { getUser } from '../../actions/session_actions';
import { getReviewsByAppointment,
         getAppointments } from '../../reducers/selectors';
import PatientProfile from './patient_profile';

const mapStatetoProps = (state) => {
  const user = state.session.currentUser;
  return {
    user: user,
    reviews: getReviewsByAppointment(state.reviews, user.review_ids),
    appointments: getAppointments(state.appointments, user.appointment_ids),
    doctors: state.doctors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAppointment: appointment => dispatch(updateAppointment(appointment)),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(PatientProfile));
