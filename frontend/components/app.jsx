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
import SearchIndexContainer from './search/search_index_container';
import ProfileContainer from './profile/profile_container';
import BookingFormContainer from './appointments/booking_form_container';

const App = () => {
return (
  <div>
    <HeaderContainer />
    <Route exact path="/" component={SearchContainer} />
    <Route path="/search" component={SearchIndexContainer} />
    <Route path="/signin" component={SessionFormContainer}/>
    <Route path="/createuser" component={SignupFormContainer} />
    <Route path="/doctor/:id" component={DoctorContainer} />
    <Route path="/booking/:id" component={BookingFormContainer} />
    <Route path="/patient" component={ProfileContainer} />
  </div>
);

};

export default App;
