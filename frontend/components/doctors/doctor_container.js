import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getADoctor } from '../../actions/doctor_actions';
import Doctor from './doctor';

const mapStatetoProps = ({ doctors }) => {
  return {
    doctors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getADoctor: doctor => dispatch(getADoctor(doctor)),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Doctor));
