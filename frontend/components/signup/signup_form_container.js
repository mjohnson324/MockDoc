import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = ({ session }) => {
  return {
    errors: session.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user)),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(SignUpForm));
