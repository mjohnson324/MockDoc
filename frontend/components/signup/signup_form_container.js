import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SignUpForm from './signup_form';
import { withRouter } from 'react-router-dom';
import { selectErrors } from '../../reducers/selectors';

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

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(SignUpForm));
