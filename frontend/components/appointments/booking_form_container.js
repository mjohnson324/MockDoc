import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/error_actions';
import {
  updateAppointment,
  getAppointment,
        } from '../../actions/appointment_actions';
import { selectErrors } from '../../reducers/selectors';
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
