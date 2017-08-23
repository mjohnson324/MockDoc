import { connect } from 'react-redux';
import Header from './header';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

export default withRouter(connect(mapStatetoProps, null)(Header));
