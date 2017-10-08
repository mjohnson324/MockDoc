import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAppointment } from '../../actions/appointment_actions';
import { getUser,
         clearState } from '../../actions/session_actions';
import { deleteReview } from '../../actions/review_actions';
import { getReviewsByAppointment,
         getAppointments } from '../../reducers/selectors';
import PatientProfile from './patient_profile';
import { isEmpty } from 'lodash';

const mapStatetoProps = (state) => {
  const user = state.session.currentUser;

  let userReviews;
  let userAppointments;
  if (isEmpty(state.appointments)) {
    userAppointments = [];
  } else {
    userAppointments = getAppointments(state.appointments, user.appointment_ids);
  }
  if (isEmpty(state.reviews)) {
    userReviews = {};
  } else {
    userReviews = getReviewsByAppointment(state.reviews, user.review_ids);
  }

  return {
    user: user,
    reviews: userReviews,
    appointments: userAppointments,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAppointment: appointment => dispatch(updateAppointment(appointment)),
    getUser: id => dispatch(getUser(id)),
    deleteReview: id => dispatch(deleteReview(id)),
    clearState: () => dispatch(clearState()),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(PatientProfile));
