import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAppointments, getReviews } from '../../reducers/selectors';
import { clearState } from '../../actions/session_actions';
import { getADoctor } from '../../actions/doctor_actions';
import Doctor from './doctor';

const mapStatetoProps = (state, ownProps) => {
  let thisDoc = state.doctors[ownProps.match.params.id];
  const appointmentIds = thisDoc === undefined ? [] : thisDoc.appointment_ids;
  const reviewIds = thisDoc === undefined ? [] : thisDoc.review_ids;

  return {
    doctor: thisDoc,
    appointments: getAppointments(state.appointments, appointmentIds),
    reviews: getReviews(state.reviews, reviewIds),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getADoctor: doctor => dispatch(getADoctor(doctor)),
    clearState: () => dispatch(clearState()),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Doctor));
