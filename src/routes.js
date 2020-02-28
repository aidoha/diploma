import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { SignIn, Main, SignUp } from './pages';

export default withRouter(() => {
  return (
    <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/signin' exact component={SignIn} />
      <Route path='/signup' exact component={SignUp} />
    </Switch>
  );
});
