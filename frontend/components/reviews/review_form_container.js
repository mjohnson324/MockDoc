import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  createReview,
  changeReview } from '../../actions/review_actions';
import { clearErrors } from '../../actions/error_actions';
import { selectErrors } from '../../reducers/selectors';
import { getAppointment } from '../../actions/appointment_actions';
import { selectReview } from '../../reducers/selectors';
import ReviewForm from './review_form';

const mapStatetoProps = (state) => {
  const appointmentId = window.location.href.split('-')[1];
  return {
    errors: selectErrors(state),
    appointment: state.appointments[appointmentId],
    review: selectReview(state.reviews, appointmentId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    changeReview: review => dispatch(changeReview(review)),
    getAppointment: appointmentId => dispatch(getAppointment(appointmentId)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ReviewForm));
