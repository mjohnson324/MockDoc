import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchIndex from './search_index';
import { 
  sortAppointmentsByDoctor,
  selectDoctors } from '../../reducers/selectors';

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
    address: filter.address,
    status: filter.status,
  };
};

export default withRouter(connect(mapStateToProps)(SearchIndex));
