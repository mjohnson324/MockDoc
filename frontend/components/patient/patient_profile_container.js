import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PatientProfile from './patient_profile';

const mapStatetoProps = ({ session }) => {
  return {
    user: session.currentUser
  };
};

export default withRouter(connect(mapStatetoProps, null)(PatientProfile));
