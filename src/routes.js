import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {
  SignIn,
  Main,
  SignUp,
  Company,
  Service,
  Orders,
  ForgotPassword,
  ResetPassword,
} from './pages';
import CompanyView from './pages/company/components/companyView';
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
      <Route path='/forgot-password' exact component={ForgotPassword} />
      <Route path='/reset' exact component={ResetPassword} />
      <PrivateRoute path='/company' exact Component={Company} />
      <PrivateRoute path='/company/edit/:id' exact Component={CompanyView} />
      <PrivateRoute path='/service/:slug/:id?' Component={Service} />
      <PrivateRoute path='/orders/:id?' Component={Orders} />
    </Switch>
  );
});
