import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../Errors/error_actions';
import { selectErrors } from '../../Errors/error_selectors';
import { logIn } from '../session_actions';
import SessionForm from './session_form';

const mapStatetoProps = ({ errors }) => {
  return {
    errors: selectErrors(errors),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: user => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors()),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(SessionForm));
