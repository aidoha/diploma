import {
  UPDATE_CUSTOMER_EMAIL,
  UPDATE_CUSTOMER_PASSWORD,
  SHOW_PASSWORD,
  SET_AUTHORIZED,
  VALIDATE_EMAIL,
  AUTH_ERROR,
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
  statuses: {
    error: {
      value: false,
      text: 'error',
      label: 'errorAuth',
      autoHideDuration: 6000,
      message: 'Упс... Что-то пошло не так',
    },
    singInSuccess: {
      value: false,
      text: 'success',
      label: 'singInSuccess',
      autoHideDuration: 4000,
      message: 'Вы успешно авторизовались!',
    },
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
    case AUTH_ERROR:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          error: {
            ...state.statuses.error,
            value: action.payload,
          },
        },
      };
    case SET_AUTHORIZED:
      return {
        ...state,
        isLoggedIn: true,
        statuses: {
          ...state.statuses,
          singInSuccess: {
            ...state.statuses.singInSuccess,
            value: action.payload,
          },
        },
      };
    default:
      return state;
  }
};

export default signInReducer;
