import React from 'react';
import {
  Route,
  Switch,
  Link } from 'react-router-dom';

import HeaderContainer from './header_container';
import SessionFormContainer from './session/session_form_container';

const App = () => {
return (
  <div>
    <HeaderContainer />
    <Route path="/signin" component={SessionFormContainer}/>
    <Route />
  </div>
);

};

export default App;
