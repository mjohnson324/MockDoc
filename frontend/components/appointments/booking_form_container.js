import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  updateAppointment,
  getAppointment,
        } from '../../actions/appointment_actions';

import BookingForm from './booking_form';

const mapStatetoProps = state => {
  return {
    user: state.session.currentUser,
    doctors: state.doctors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAppointment: appointment => dispatch(updateAppointment(appointment)),
    getAppointment: appointment => dispatch(getAppointment(appointment)),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(BookingForm));
