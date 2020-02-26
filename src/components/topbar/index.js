import React from 'react';

import { Button, Label } from '../arui';
import { NavLink } from 'react-router-dom';

const TobBar = () => {
	return (
		<div>
			<div>Icon</div>
			<div margin="20px">
				<NavLink to="/signin" exact>
					<Label size="m">Войти</Label>
				</NavLink>
				<NavLink to="/signup" exact>
					<Button view="extra">Зарегистрироваться</Button>
				</NavLink>
			</div>
		</div>
	);
};

export default TobBar;
