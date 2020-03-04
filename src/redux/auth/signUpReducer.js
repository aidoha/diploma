import {
  UPDATE_COMPANY_NAME,
  UPDATE_BUSINESS_CATEGORY,
  HIDE_FIRST_STEP,
  UPDATE_CUSTOMER_NAME,
  UPDATE_CUSTOMER_EMAIL,
  UPDATE_CUSTOMER_PHONE,
  UPDATE_CUSTOMER_PASSWORD,
  SHOW_PASSWORD
} from './types';

const initialState = {
  firstStep: true,
  secondStep: false,
  companyName: '',
  businessCategory: '',
  name: '',
  email: '',
  password: '',
  showPassword: false,
  phone: '',
  touched: {
    companyName: false,
    businessCategory: false,
    name: false,
    email: false,
    password: false
  }
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMPANY_NAME:
      return {
        ...state,
        companyName: action.payload,
        touched: {
          ...state.touched,
          companyName: true
        }
      };
    case UPDATE_BUSINESS_CATEGORY:
      return {
        ...state,
        businessCategory: action.payload,
        touched: {
          ...state.touched,
          businessCategory: true
        }
      };
    case HIDE_FIRST_STEP:
      return {
        ...state,
        firstStep: false,
        secondStep: true
      };
    case UPDATE_CUSTOMER_NAME:
      return {
        ...state,
        name: action.payload,
        touched: {
          ...state.touched,
          name: true
        }
      };
    case UPDATE_CUSTOMER_EMAIL:
      return {
        ...state,
        email: action.payload,
        touched: {
          ...state.touched,
          email: true
        }
      };
    case UPDATE_CUSTOMER_PASSWORD:
      return {
        ...state,
        password: action.payload,
        touched: {
          ...state.touched,
          password: true
        }
      };
    case UPDATE_CUSTOMER_PHONE:
      return {
        ...state,
        phone: action.payload,
        touched: {
          ...state.touched,
          phone: true
        }
      };
    case SHOW_PASSWORD:
      return {
        ...state,
        showPassword: action.payload
      };
    default:
      return state;
  }
};

export default signUpReducer;
