import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDoctors, changeFilter } from '../search_actions';
import { sortAppointmentsByDoctor, selectDoctors } from '../search_selectors';
import SearchIndex from './search_index';

const mapStateToProps = ({ filter, doctors, appointments }) => {
  let sortedDoctors = [];
  let docSortedAppointments = {};
  if (filter.status === "success") {
    sortedDoctors = selectDoctors(doctors);
    docSortedAppointments = sortAppointmentsByDoctor(
      sortedDoctors, appointments
    );
  }
  return {
    doctors: sortedDoctors,
    appointments: docSortedAppointments,
    filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDoctors: (filter) => dispatch(getDoctors(filter)),
    changeFilter: (filter) => dispatch(changeFilter(filter)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex));
