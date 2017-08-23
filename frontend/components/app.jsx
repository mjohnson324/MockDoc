import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom';

import AuthFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util.js';

const App = () => {
return (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={ AuthFormContainer } />
      <AuthRoute path="/login" component ={ AuthFormContainer } />
    </Switch>
  </div>
);

};

export default App;
