import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField, MenuItem } from '@material-ui/core';
import { BUSINESS_CATEGORIES } from '../../../constants';
import { handleCompanyName, handleBusinessCategory, handleSteps } from '../../../redux';

const FirstStep = () => {
	const signUpState = useSelector(state => state.signUp);
	const dispatch = useDispatch();
	const { companyName, businessCategory, touched } = signUpState;

	const onSubmit = e => {
		e.preventDefault();
		dispatch(handleSteps());
	};

	const onChangeCompanyName = value => {
		dispatch(handleCompanyName(value));
	};

	const onChangeBusinessCategory = value => {
		dispatch(handleBusinessCategory(value));
	};

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
				error={touched.companyName && companyName === ''}
				onBlur={e => onChangeCompanyName(e.target.value)}
				onChange={e => onChangeCompanyName(e.target.value)}
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
				error={touched.businessCategory && businessCategory === ''}
				onBlur={e => onChangeBusinessCategory(e.target.value)}
				onChange={e => onChangeBusinessCategory(e.target.value)}
			>
				{BUSINESS_CATEGORIES.map(option => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				size="large"
				disabled={companyName === '' || businessCategory === ''}
			>
				Продолжить
			</Button>
		</form>
	);
};

export default FirstStep;
