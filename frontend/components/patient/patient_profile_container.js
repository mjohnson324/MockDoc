import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAppointment } from '../../actions/appointment_actions';

import PatientProfile from './patient_profile';

const mapStatetoProps = ({ session }) => {
  return {
    user: session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAppointment: appointment => dispatch(updateAppointment(appointment)),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(PatientProfile));
