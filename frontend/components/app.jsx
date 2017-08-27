import React from 'react';
import {
  Route,
  Switch,
  Link } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import SessionFormContainer from './session/session_form_container';
import SignupFormContainer from './signup/signup_form_container';
import DoctorContainer from './doctors/doctor_container';
import SearchContainer from './search/search_container';

const App = () => {
return (
  <div>
    <HeaderContainer />
    <SearchContainer />
    <Route path="/signin" component={SessionFormContainer}/>
    <Route path="/createuser" component={SignupFormContainer} />
    <Route path="/doctor/:id" component={DoctorContainer} />
  </div>
);

};

export default App;
