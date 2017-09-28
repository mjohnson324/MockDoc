import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/error_actions.js';
import { selectErrors } from '../../reducers/selectors';
import {
  updateAppointment,
  getAppointment,
        } from '../../actions/appointment_actions';
import { clearState } from '../../actions/session_actions';

import BookingForm from './booking_form';

const mapStatetoProps = (state, ownProps) => {
  return {
    patient: state.session.currentUser,
    appointment: state.appointments[ownProps.match.params.id],
    errors: selectErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAppointment: appointment => dispatch(updateAppointment(appointment)),
    getAppointment: appointment => dispatch(getAppointment(appointment)),
    clearErrors: appointment => dispatch(clearErrors()),
    clearState: () => dispatch(clearState()),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(BookingForm));
