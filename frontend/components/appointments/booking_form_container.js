import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/error_actions.js';

import {
  updateAppointment,
  getAppointment,
        } from '../../actions/appointment_actions';

import BookingForm from './booking_form';

const mapStatetoProps = (state, ownProps) => {
  return {
    patient: state.session.currentUser,
    appointment: state.appointments[ownProps.match.params.id],
    errors: state.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAppointment: appointment => dispatch(updateAppointment(appointment)),
    getAppointment: appointment => dispatch(getAppointment(appointment)),
    clearErrors: appointment => dispatch(clearErrors()),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(BookingForm));
