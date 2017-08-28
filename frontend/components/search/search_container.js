import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeFilter } from '../../actions/filter_actions';
import  Search from './search';

const mapStateToProps = state => {
  return {
    specialty: state.filter.specialty,
    address: state.filter.address,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: (filter) => dispatch(changeFilter(filter))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
