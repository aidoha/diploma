import { UPDATE_COMPANY_NAME, UPDATE_BUSINESS_CATEGORY, BTN_CONTINUE, HIDE_FIRST_STEP } from './types';

const initialState = {
	firstStep: true,
  secondStep: false,
  btnContinue: false,
	companyName: '',
	businessCategory: '',
	customer: {
		name: '',
		email: '',
		password: '',
		phone: '',
	},
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
        secondStep: true
			};
		default:
			return state;
	}
};

export default signUpReducer;
