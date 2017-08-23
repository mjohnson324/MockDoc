import { connect } from 'react-redux';
import Header from './header';

const mapStatetoProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default connect(mapStatetoProps, null)(Header);
