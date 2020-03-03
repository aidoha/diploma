import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField, MenuItem } from '@material-ui/core';
import { BUSINESS_CATEGORIES } from '../../../constants';
import { handleCompanyName, handleBusinessCategory, handleBtnContinue, handleSteps } from '../../../redux';

const FirstStep = () => {
	const signUpState = useSelector(state => state.signUp);
	const dispatch = useDispatch();
	const { companyName, businessCategory, btnContinue } = signUpState;

	const onSubmit = e => {
		e.preventDefault();
		dispatch(handleSteps());
	};

	useEffect(() => {
		if (companyName !== '' && businessCategory !== '') {
			dispatch(handleBtnContinue());
		}
	}, [companyName, businessCategory]);

	return (
		<form noValidate onSubmit={onSubmit}>
			<TextField
				variant="outlined"
				margin="normal"
				fullWidth
				id="company"
				label="Название компании"
				name="company"
				value={companyName}
				onChange={e => dispatch(handleCompanyName(e.target.value))}
			/>
			<TextField
				fullWidth
				select
				label="Категория бизнеса"
				variant="outlined"
				margin="normal"
				id="business-category"
				name="business-category"
				value={businessCategory}
				onChange={e => dispatch(handleBusinessCategory(e.target.value))}
			>
				{BUSINESS_CATEGORIES.map(option => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
			<Button type="submit" fullWidth variant="contained" color="primary" size="large" disabled={!btnContinue}>
				Продолжить
			</Button>
		</form>
	);
};

export default FirstStep;
