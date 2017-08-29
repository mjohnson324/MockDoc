import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectDoctors, selectAppointments } from '../../reducers/selectors';
import { getDoctors } from '../../actions/doctor_actions';
import { getAppointments } from '../../actions/appointment_actions';

import SearchIndex from './search_index';

const mapStateToProps = (state) => {
  return {
    doctors: selectDoctors(state),
    filters: state.filter,
    appointments: selectAppointments(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDoctors: (filters) => dispatch(getDoctors(filters)),
    getAppointments: (filters) => dispatch(getAppointments(filters)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex));
