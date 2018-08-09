import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAppointment } from '../../actions/appointment_actions';
import { getUser } from '../../actions/session_actions';
import { deleteReview } from '../../actions/review_actions';
import PatientProfile from './patient_profile';
import { getReviewsByAppointment,
  getPatientAppointments } from '../../reducers/selectors';
import { userDataIsPresent } from '../../util/session_api_utils';

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