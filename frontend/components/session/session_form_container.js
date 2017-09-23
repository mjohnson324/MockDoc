import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';
import { selectErrors } from '../../reducers/selectors';

const mapStatetoProps = (state) => {
  return {
    errors: selectErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: user => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors()),
 };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(SessionForm));
