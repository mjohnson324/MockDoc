import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  Search from './search';

const mapStateToProps = state => {
  return {
    filters: null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filter: null,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
