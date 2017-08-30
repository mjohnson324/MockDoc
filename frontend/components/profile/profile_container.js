import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './profile_form';

const mapStatetoProps = ({ session }) => {
  return {
    session
  };
};

export default withRouter(connect(mapStatetoProps, null)(Profile));
