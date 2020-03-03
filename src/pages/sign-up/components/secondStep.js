import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
	handleCustomerEmail,
	handleCustomerPassword,
	handleCustomerName,
	handlePasswordVisibility,
} from '../../../redux';

const SecondStep = () => {
	const signUpState = useSelector(state => state.signUp);
	const dispatch = useDispatch();
	const { name, email, password, showPassword, touched } = signUpState;

	const onSubmit = event => {
		event.preventDefault();
	};

	return (
		<form noValidate onSubmit={onSubmit}>
			<TextField
				variant="outlined"
				margin="normal"
				fullWidth
				label="Имя"
				name="name"
				value={name}
				error={touched.name && name === ''}
				onBlur={e => dispatch(handleCustomerName(e.target.value))}
				onChange={e => dispatch(handleCustomerName(e.target.value))}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				fullWidth
				label="E-mail"
				name="email"
				value={email}
				error={touched.email && email === ''}
				onBlur={e => dispatch(handleCustomerEmail(e.target.value))}
				onChange={e => dispatch(handleCustomerEmail(e.target.value))}
			/>
			<TextField
				type={showPassword ? 'text' : 'password'}
				variant="outlined"
				margin="normal"
				fullWidth
				label="Пароль"
				name="password"
				value={password}
				error={touched.password && password === ''}
				onBlur={e => dispatch(handleCustomerPassword(e.target.value))}
				onChange={e => dispatch(handleCustomerPassword(e.target.value))}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={() => dispatch(handlePasswordVisibility(!showPassword))}>
								{!showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				size="large"
				disabled={name === '' || email === '' || password === ''}
			>
				Зарегистрироваться
			</Button>
		</form>
	);
};

export default SecondStep;
