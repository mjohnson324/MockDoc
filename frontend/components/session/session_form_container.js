import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import sessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    errors: session.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: user => dispatch(logIn(user)),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(sessionForm));
