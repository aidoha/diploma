import { UPDATE_COMPANY_NAME, UPDATE_BUSINESS_CATEGORY } from './types';

const initialState = {
  companyName: '',
  businessCategory: '',
  disabled: true,
  customer: {
    name: '',
    email: '',
    password: '',
    phone: ''
  }
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMPANY_NAME:
      return {
        ...state,
        companyName: action.payload
      };
    case UPDATE_BUSINESS_CATEGORY:
      return {
        ...state,
        businessCategory: action.payload
      };
    default:
      return state;
  }
};

export default signUpReducer;
