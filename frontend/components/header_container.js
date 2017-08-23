import { connect } from 'react-redux';
import Header from './header';
import { withRouter } from 'react-router-dom';
import { logOut } from '../actions/session_actions';

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
