import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateFilter } from '../../actions/filter_actions';
import  Search from './search';

const mapStateToProps = state => {
  return {
    specialty: state.filter.specialty,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter) => dispatch(updateFilter(filter))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
