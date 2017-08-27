import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectDoctors } from '../../reducers/selectors';

import SearchIndex from './search_index';

const mapStateToProps = (state) => {
  return {
    doctors: selectDoctors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex));
