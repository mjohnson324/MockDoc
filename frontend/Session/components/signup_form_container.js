import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../Errors/error_actions';
import { selectErrors } from '../../Errors/error_selectors';
import { signUp } from '../session_actions';
import SignupForm from './signup_form';

const mapStatetoProps = ({ errors }) => {
  return {
    errors: selectErrors(errors),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors()),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(SignupForm));
