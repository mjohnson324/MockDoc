import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectErrors } from '../../Errors/error_selectors';
import { clearErrors } from '../../Errors/error_actions';
import {
  updateAppointment,
  getAppointment,
        } from '../appointment_actions';
import BookingForm from './booking_form';

const mapStatetoProps = (state, ownProps) => {
  let app = state.appointments[ownProps.match.params.id];
  app = app === undefined ? defaultApp : app;
  
  return {
    patient: state.session.currentUser,
    appointment: app,
    errors: selectErrors(state.errors),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAppointment: appointment => dispatch(updateAppointment(appointment)),
    getAppointment: appointment => dispatch(getAppointment(appointment)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

const defaultApp = {
  start_time: '',
  address: '',
  first_name: '',
  last_name: ''
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(BookingForm));
