import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './header';
import { logOut } from '../../Session/session_actions';

const mapStatetoProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Header));
