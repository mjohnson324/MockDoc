import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import { clearErrors } from '../../actions/error_actions';
import { selectErrors } from '../../reducers/selectors';
import { getAppointment } from '../../actions/appointment_actions';
import ReviewForm from './review_form';

const mapStatetoProps = (state, ownProps) => {
  debugger
  return {
    errors: selectErrors(state),
    appointment: state.appointments[ownProps.match.params.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    getAppointment: appointment => dispatch(getAppointment(appointment)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ReviewForm));
