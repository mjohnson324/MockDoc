import React from 'react';
import {
  Route,
  Switch,
  Link } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import SessionFormContainer from './session/session_form_container';
import SignupFormContainer from './signup/signup_form_container';

const App = () => {
return (
  <div>
    <HeaderContainer />
    <Route path="/signin" component={SessionFormContainer}/>
    <Route path="/createuser" component={SignupFormContainer} />
  </div>
);

};

export default App;
