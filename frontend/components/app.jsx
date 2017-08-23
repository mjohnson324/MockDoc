import React from 'react';
import {
  Route,
  Switch,
  Link } from 'react-router-dom';

import AuthFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util.js';

const App = () => {
return (
  <div>
    <header>
      <Link to="/">
        <h1>MockDoc</h1>
      </Link>
    </header>

    <Switch>
      <AuthRoute path="/signup" component={ AuthFormContainer } />
      <AuthRoute path="/login" component ={ AuthFormContainer } />
    </Switch>
  </div>
);

};

export default App;
