import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../Errors/error_actions';
import { selectErrors } from '../../Errors/error_selectors';
import { getAppointment } from '../../Appointments/appointment_actions';
import { createReview, changeReview } from '../review_actions';
import { selectReview } from '../review_selectors';
import ReviewForm from './review_form';

const mapStatetoProps = (state) => {
  const appointmentId = window.location.href.split('-')[1];
  return {
    errors: selectErrors(state.errors),
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
