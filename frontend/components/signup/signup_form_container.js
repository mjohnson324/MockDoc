import { connect } from 'react-redux';
import { SignUp } from '../../actions/session_actions';
import SignUpForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = ({ session }) => {
  return {
    errors: session.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(SignUp(user)),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(SignUpForm));
