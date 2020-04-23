import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { SignIn, Main, SignUp, Intro, Company, Service } from './pages';
import { useSelector } from 'react-redux';

export default withRouter(() => {
  const signUpState = useSelector((state) => state.signUp);

  const PrivateRoute = ({ Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        signUpState.isLoggedIn ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
  return (
    <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/signin' exact component={SignIn} />
      <Route path='/signup' exact component={SignUp} />
      <PrivateRoute path='/company' exact Component={Company} />
      <PrivateRoute path='/service/:slug/:id?' Component={Service} />
      {/* <PrivateRoute path='/intro' exact Component={Intro} /> */}
    </Switch>
  );
});
