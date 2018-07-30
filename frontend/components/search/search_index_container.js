import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectDoctors } from '../../reducers/selectors';
import { getDoctors } from '../../actions/doctor_actions';

import SearchIndex from './search_index';

const mapStateToProps = (state) => {


  return {
    doctors: selectDoctors(state),
    appointments: state.appointments,
    filters: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDoctors: (filters) => dispatch(getDoctors(filters)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex));
