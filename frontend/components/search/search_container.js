import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeFilter } from '../../actions/filter_actions';
import { clearDoctors, getDoctors } from '../../actions/doctor_actions';
import  Search from './search';

const mapStateToProps = ({ filter }) => {
  return {
    specialty: filter.specialty,
    address: filter.address,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: (filter) => dispatch(changeFilter(filter)),
    clearDoctors: () => dispatch(clearDoctors()),
    getDoctors: (filter) => dispatch(getDoctors(filter))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
