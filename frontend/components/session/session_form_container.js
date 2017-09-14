import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = ({ session }) => {
  return {
    errors: session.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: user => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors()),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(SessionForm));
