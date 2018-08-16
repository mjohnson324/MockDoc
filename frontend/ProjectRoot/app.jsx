import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from './auth_util';
import HeaderContainer from '../Session/components/header_container';
import Footer from '../Session/components/footer';
import SessionFormContainer from '../Session/components/session_form_container';
import SignupFormContainer from '../Session/components/signup_form_container';
import SearchContainer from '../Search/components/search_container';
import SearchIndexContainer from '../Search/components/search_index_container';
import BookingFormContainer from '../Appointments/components/booking_form_container';
import DoctorContainer from '../Doctors/components/doctor_container';
import PatientProfileContainer from '../Patient/components/patient_profile_container';
import ReviewFormContainer from '../Reviews/components/review_form_container';

const App = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <SearchContainer />
      <Route path="/search" component={SearchIndexContainer} />
      <Route path="/signin" component={SessionFormContainer}/>
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/doctor/:id" component={DoctorContainer} />
      <AuthRoute path="/booking/:id" component={BookingFormContainer} />
      <AuthRoute path="/review/:id" component={ReviewFormContainer} />
      <ProtectedRoute path="/patient" component={PatientProfileContainer} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
