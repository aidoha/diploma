import {
  UPDATE_COMPANY_NAME,
  UPDATE_BUSINESS_CATEGORY,
  UPDATE_BUSINESS_CATEGORIES,
  HIDE_FIRST_STEP,
  UPDATE_CUSTOMER_NAME,
  UPDATE_CUSTOMER_EMAIL,
  UPDATE_CUSTOMER_PHONE,
  UPDATE_CUSTOMER_PASSWORD,
  SHOW_PASSWORD,
  SET_AUTHORIZED,
  UPDATE_COMPANY_ID,
  AUTH_ERROR,
  COMPANY_SAVE_SUCCESS,
} from './types';

const initialState = {
  firstStep: true,
  secondStep: false,
  companyName: '',
  companyId: null,
  categories: [],
  businessCategory: '',
  businessCategoryId: null,
  name: '',
  email: '',
  password: '',
  showPassword: false,
  phone: '',
  isLoggedIn: localStorage.getItem('isLoggedIn') || null,
  touched: {
    companyName: false,
    businessCategory: false,
    name: false,
    email: false,
    password: false,
    phone: false,
  },
  statuses: {
    error: {
      value: false,
      text: 'error',
      label: 'errorAuth',
      autoHideDuration: 6000,
      message: 'Упс... Что-то пошло не так',
    },
    saveCompany: {
      value: false,
      text: 'success',
      label: 'saveCompany',
      autoHideDuration: 3000,
      message: 'Вы успешно создали компанию!',
    },
    edit: {
      value: false,
      text: 'success',
      label: 'edit',
      autoHideDuration: 3000,
      message: 'Вы успешно редактировали свою компанию!',
    },
    delete: {
      value: false,
      text: 'success',
      label: 'delete',
      autoHideDuration: 3000,
      message: 'Вы успешно удалили компанию!',
    },
  },
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMPANY_NAME:
      return {
        ...state,
        companyName: action.payload,
        touched: {
          ...state.touched,
          companyName: true,
        },
      };
    case UPDATE_COMPANY_ID:
      return {
        ...state,
        companyId: action.payload,
      };
    case UPDATE_BUSINESS_CATEGORY:
      return {
        ...state,
        businessCategory: action.payload.businessCategory,
        businessCategoryId: action.payload.businessCategoryId,
        touched: {
          ...state.touched,
          businessCategory: true,
        },
      };
    case UPDATE_BUSINESS_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
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
        touched: {
          ...state.touched,
          name: true,
        },
      };
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
    case UPDATE_CUSTOMER_PHONE:
      return {
        ...state,
        phone: action.payload,
        touched: {
          ...state.touched,
          phone: true,
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
    case COMPANY_SAVE_SUCCESS:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          saveCompany: {
            ...state.statuses.saveCompany,
            value: action.payload,
          },
        },
      };
    default:
      return state;
  }
};

export default signUpReducer;
