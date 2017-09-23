import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sortAppointmentsByDoctor } from '../../reducers/selectors';

import { getADoctor } from '../../actions/doctor_actions';
import Doctor from './doctor';

const mapStatetoProps = (state, ownProps) => {
  let thisDoc = state.doctors[ownProps.match.params.id];

  return {
    doctor: thisDoc,
    appointments: sortAppointmentsByDoctor([thisDoc], state.appointments),
    // reviews: state.reviews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getADoctor: doctor => dispatch(getADoctor(doctor)),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Doctor));
