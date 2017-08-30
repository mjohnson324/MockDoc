import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateAppointment } from '../../actions/appointment_actions';
import BookingForm from './booking_form';

const mapStatetoProps = state => {
  return {
    appointments: state.appointments,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAppointment: appointment => dispatch(updateAppointment(appointment)),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(BookingForm));
