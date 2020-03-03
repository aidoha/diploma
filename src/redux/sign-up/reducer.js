import {
	UPDATE_COMPANY_NAME,
	UPDATE_BUSINESS_CATEGORY,
	BTN_CONTINUE,
	HIDE_FIRST_STEP,
	UPDATE_CUSTOMER_NAME,
	UPDATE_CUSTOMER_EMAIL,
	UPDATE_CUSTOMER_PHONE,
	UPDATE_CUSTOMER_PASSWORD,
	SHOW_PASSWORD,
} from './types';

const initialState = {
	firstStep: true,
	secondStep: true,
	btnContinue: false,
	companyName: '',
	businessCategory: '',
	name: '',
	email: '',
	password: '',
	showPassword: false,
	phone: '',
};

const signUpReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_COMPANY_NAME:
			return {
				...state,
				companyName: action.payload,
			};
		case UPDATE_BUSINESS_CATEGORY:
			return {
				...state,
				businessCategory: action.payload,
			};
		case BTN_CONTINUE:
			return {
				...state,
				btnContinue: true,
			};
		case HIDE_FIRST_STEP:
			return {
				...state,
				firstStep: false,
				secondStep: true,
			};
		case UPDATE_CUSTOMER_NAME:
			return {
				...state,
				name: action.payload,
			};
		case UPDATE_CUSTOMER_EMAIL:
			return {
				...state,
				email: action.payload,
			};
		case UPDATE_CUSTOMER_PASSWORD:
			return {
				...state,
				password: action.payload,
			};
		case UPDATE_CUSTOMER_PHONE:
			return {
				...state,
				phone: action.payload,
			};
		case SHOW_PASSWORD:
			return {
				...state,
				showPassword: action.payload,
			};
		default:
			return state;
	}
};

export default signUpReducer;
