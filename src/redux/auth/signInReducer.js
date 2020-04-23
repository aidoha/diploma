import {
  UPDATE_CUSTOMER_EMAIL,
  UPDATE_CUSTOMER_PASSWORD,
  SHOW_PASSWORD,
  SET_AUTHORIZED,
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
