import {
  UPDATE_NAME,
  UPDATE_SUBCATEGORY,
  UPDATE_SERVICE,
  UPDATE_DESCRIPTION,
  UPDATE_DURATION,
  UPDATE_PRICE,
  UPDATE_SUBCATEGORY_ID,
  UPDATE_SERVICE_ID,
  SERVICE_ERROR,
  SERVICE_SUCCESS,
} from './types';

const intialState = {
  name: '',
  subcategories: [],
  services: [],
  description: '',
  duration: '',
  price: 0,
  ids: {
    service: 0,
    subcategory: 0,
  },
  statuses: {
    error: {
      value: false,
      text: 'error',
      autoHideDuration: 6000,
      message: 'Упс... Что-то пошло не так',
    },
    success: {
      value: false,
      text: 'success',
      autoHideDuration: 6000,
      message: 'Вы успешно создали услугу!',
    },
  },
};

const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: payload,
      };
    case UPDATE_SUBCATEGORY:
      return {
        ...state,
        subcategories: payload,
      };
    case UPDATE_SERVICE:
      return {
        ...state,
        services: payload,
      };
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: payload,
      };
    case UPDATE_DURATION:
      return {
        ...state,
        duration: payload,
      };
    case UPDATE_PRICE:
      return {
        ...state,
        price: payload,
      };
    case UPDATE_SUBCATEGORY_ID:
      return {
        ...state,
        ids: {
          ...state.ids,
          subcategory: payload,
        },
      };
    case UPDATE_SERVICE_ID:
      return {
        ...state,
        ids: {
          ...state.ids,
          service: payload,
        },
      };
    case SERVICE_ERROR:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          error: {
            ...state.statuses.error,
            value: payload,
          },
        },
      };
    case SERVICE_SUCCESS:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          success: {
            ...state.statuses.success,
            value: payload,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
