import {
  UPDATE_CUSTOMER_EMAIL,
  UPDATE_CUSTOMER_PASSWORD,
  SHOW_PASSWORD,
  SET_AUTHORIZED,
  VALIDATE_EMAIL,
} from './types';

const initialState = {
  email: '',
  password: '',
  showPassword: false,
  isLoggedIn: localStorage.getItem('isLoggedIn') || null,
  touched: {
    email: false,
    password: false,
  },
  validated: {
    email: true,
  },
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_EMAIL:
      return {
        ...state,
        email: action.payload,
        touched: {
          ...state.touched,
          email: true,
        },
      };
    case UPDATE_CUSTOMER_PASSWORD:
      return {
        ...state,
        password: action.payload,
        touched: {
          ...state.touched,
          password: true,
        },
      };
    case VALIDATE_EMAIL:
      return {
        ...state,
        validated: {
          email: action.payload,
        },
      };
    case SHOW_PASSWORD:
      return {
        ...state,
        showPassword: action.payload,
      };
    case SET_AUTHORIZED:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default signInReducer;
