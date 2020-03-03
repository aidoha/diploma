import {
	UPDATE_COMPANY_NAME,
	UPDATE_BUSINESS_CATEGORY,
	HIDE_FIRST_STEP,
	UPDATE_CUSTOMER_PHONE,
	UPDATE_CUSTOMER_NAME,
	UPDATE_CUSTOMER_EMAIL,
	UPDATE_CUSTOMER_PASSWORD,
	SHOW_PASSWORD,
} from './types';

//FIRST STEP
export const handleCompanyName = (companyName = '') => {
	return {
		type: UPDATE_COMPANY_NAME,
		payload: companyName,
	};
};
export const handleBusinessCategory = (businessCategory = '') => {
	return {
		type: UPDATE_BUSINESS_CATEGORY,
		payload: businessCategory,
	};
};
export const handleSteps = () => {
	return {
		type: HIDE_FIRST_STEP,
	};
};

//SECOND STEP
export const handleCustomerName = (name = '') => {
	return {
		type: UPDATE_CUSTOMER_NAME,
		payload: name,
	};
};
export const handleCustomerEmail = (email = '') => {
	return {
		type: UPDATE_CUSTOMER_EMAIL,
		payload: email,
	};
};
export const handleCustomerPassword = (password = '') => {
	return {
		type: UPDATE_CUSTOMER_PASSWORD,
		payload: password,
	};
};
export const handleCustomerPhone = (phone = '') => {
	return {
		type: UPDATE_CUSTOMER_PHONE,
		payload: phone,
	};
};
export const handlePasswordVisibility = (show = false) => {
	return {
		type: SHOW_PASSWORD,
		payload: show,
	};
};
