import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  createReview,
  getReview,
  updateReview } from '../../actions/review_actions';
import { clearErrors } from '../../actions/error_actions';
import { selectErrors } from '../../reducers/selectors';
import { getAppointment } from '../../actions/appointment_actions';
import ReviewForm from './review_form';
import { clearState } from '../../actions/session_actions';

const mapStatetoProps = (state) => {
  const appointmentId = window.location.href.split('-')[1];
  return {
    errors: selectErrors(state),
    appointment: state.appointments[appointmentId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    getReview: reviewAppId => dispatch(getReview(reviewAppId)),
    getAppointment: appointmentId => dispatch(getAppointment(appointmentId)),
    clearErrors: () => dispatch(clearErrors()),
    clearState: () => dispatch(clearState()),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ReviewForm));
