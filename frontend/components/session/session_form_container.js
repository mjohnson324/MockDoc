import { connect } from 'react-redux';
import { logIn, logOut, signUp } from '../../actions/session_actions';
import sessionForm from './session_form';

const mapStatetoProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = dispatch => {
  const formType = location.pathName.slice(1);
  const processForm = (formType === 'logIn') ? logIn : signUp;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
 };
};

export default connect(mapStatetoProps, mapDispatchToProps)(sessionForm);
