import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { SignIn, Main, SignUp, Intro } from './pages';

export default withRouter(() => {
  return (
    <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/signin' exact component={SignIn} />
      <Route path='/signup' exact component={SignUp} />
      <Route path='/intro' exact component={Intro} />
    </Switch>
  );
});

// const PrivateRoute = ({ Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       currentUser.isLoggedIn === true ? (
//         <App>
//           <Component {...props} />
//         </App>
//       ) : (
//         <Redirect to='/' />
//       )
//     }
//   />
// );

{
  /* <PrivateRoute
        exact={true}
        path='/course-setting/:id'
        Component={CourseSetting}
      /> */
}
