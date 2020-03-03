import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Topbar } from '../../components';
import { Container, Grid, Typography } from '@material-ui/core';
import FirstStep from './components/firsStep';

import './index.css';

const SignUp = () => {
	const signUpState = useSelector(state => state.signUp);
	const dispatch = useDispatch();
	const { firstStep, secondStep } = signUpState;

	return (
		<>
			<Topbar />
			<Container maxWidth="xs" className="auth__container">
				<Typography component="h1" variant="h5">
					Регистрация
				</Typography>
				<Grid container alignItems="center">
					{firstStep && <FirstStep />}
				</Grid>
			</Container>
		</>
	);
};

export default SignUp;
