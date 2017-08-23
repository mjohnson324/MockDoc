import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom';

import SearchContainer from './search/search_container';
import AuthFormContainer from './session/session_form_container';

  const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component={ SearchContainer } />
        <AuthRoute path="/signup" component={AuthFormContainer} />
        <AuthRoute path="/login" component ={AuthFormContainer} />
      </Switch>
    </div>
  );

  };

  export default App;
