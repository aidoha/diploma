import React, { useEffect } from 'react';

import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';

const TopBar = () => {
	const { pathname } = useLocation();
	const { push } = useHistory();
	const authText = pathname === '/signup' ? 'Вход' : 'Зарегистрироваться';
	const authLink = pathname === '/signup' ? '/signin' : '/signup';

	useEffect(() => {
		document.title = authText
	}, []);

	return (
		<>
			{pathname === '/' && (
				<AppBar position="static">
					<Grid container justify="flex-end">
						<Toolbar>
							<Button color="inherit" onClick={() => push('/signin')}>
								Войти
							</Button>
							<Button color="default" variant="contained" onClick={() => push('/signup')}>
								Зарегистрироваться
							</Button>
						</Toolbar>
					</Grid>
				</AppBar>
			)}
			{(pathname === '/signin' || pathname === '/signup') && (
				<AppBar color="transparent" position="static">
					<Grid container justify="space-between" alignItems="center">
						<div>Icon</div>
						<Toolbar>
							<Button color="default" onClick={() => push(authLink)}>
								{authText}
							</Button>
						</Toolbar>
					</Grid>
				</AppBar>
			)}
		</>
	);
};

export default TopBar;
