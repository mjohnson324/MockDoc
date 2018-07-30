import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getItems } from '../../reducers/selectors';
import { getADoctor } from '../../actions/doctor_actions';
import Doctor from './doctor';

const mapStatetoProps = (state, ownProps) => {
  let thisDoc = state.doctors[ownProps.match.params.id];
  const appointmentIds = thisDoc === undefined ? [] : thisDoc.appointment_ids;
  const reviewIds = thisDoc === undefined ? [] : thisDoc.review_ids;
  return {
    doctor: thisDoc,
    appointments: getItems(state.appointments, appointmentIds),
    reviews: getItems(state.reviews, reviewIds),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getADoctor: doctor => dispatch(getADoctor(doctor)),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Doctor));
