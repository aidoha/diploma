import React from 'react';

import { Topbar } from '../../components';
import { Container, Grid, Typography, Button, TextField } from '@material-ui/core';

import './index.css';

const SignUp = () => {
	return (
		<>
			<Topbar />
			<Container maxWidth="sm" className="auth__container">
				<Typography component="h1" variant="h5">
					Регистрация
				</Typography>
				<Grid container direction="row" justify="center" alignItems="center">
					<form noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Button type="submit" fullWidth variant="contained" color="primary">
							Sign In
						</Button>
					</form>
				</Grid>
			</Container>
		</>
	);
};

export default SignUp;
