import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn, Main, SignUp } from './pages';

export default () => {
	return (
		<Switch>
      <Route path="/" exact component={Main} />
			<Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
		</Switch>
	);
};
