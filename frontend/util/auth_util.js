import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => {
  return(<Route path={path} render={(props) => (
    !loggedIn ? (
      <Redirect to="/signin" />
    ) : (
      <Component {...props} />
    )
  )} />);
};

const Protected = ({ component: Component, path, loggedIn }) => {
  return(<Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />);
};

// const Restricted = ({ component: Component, path, loggedIn }) => {
//   const ThisComponent = this.props.component;
//   const thisPath = this.props.path;
//   const loggedIn = this.props.loggedIn;
//
//   return(<Route path={thisPath} render={(props) => (
//      loggedIn ? (
//       <ThisComponent {...props} />
//     ) : (
//       <Redirect to="/" />
//     )
//   )} />);
// };

const mapStateToProps = state => {
  return({loggedIn: Boolean(state.session.currentUser)});
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);

// export const RestrictedRoute = withRouter(
//   connect(mapStateToProps, null)(Restricted)
// );
