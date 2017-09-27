import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAppointments, getReviews } from '../../reducers/selectors';

import { getADoctor } from '../../actions/doctor_actions';
import Doctor from './doctor';

const mapStatetoProps = (state, ownProps) => {
  let thisDoc = state.doctors[ownProps.match.params.id];
  const appointmentIds = thisDoc === null ? [] : thisDoc.appointment_ids;
  const reviewIds = thisDoc === null ? [] : thisDoc.review_ids;

  return {
    doctor: thisDoc,
    appointments: getAppointments(appointmentIds, state.appointments),
    reviews: getReviews(reviewIds, state.reviews),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getADoctor: doctor => dispatch(getADoctor(doctor)),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Doctor));
