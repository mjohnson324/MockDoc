import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAppointment } from '../../Appointments/appointment_actions';
import { getUser } from '../../Session/session_actions';
import { deleteReview } from '../../Reviews/review_actions';
import { userDataIsPresent,
         getReviewsByAppointment,
         getPatientAppointments } from '../patient_selectors';
  import PatientProfile from './patient_profile';

const mapStatetoProps = ({ session, reviews, appointments }) => {
  const user = session.currentUser;
  let patientApps = [];
  let patientReviews = {};
  if (userDataIsPresent(user)) {
    patientApps = getPatientAppointments(appointments, user.appointment_ids);
    patientReviews = getReviewsByAppointment(reviews, user.review_ids);
  }
  return {
    user: session.currentUser,
    reviews: patientReviews,
    appointments: patientApps,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAppointment: appointment => dispatch(updateAppointment(appointment)),
    getUser: id => dispatch(getUser(id)),
    deleteReview: id => dispatch(deleteReview(id)),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(PatientProfile));