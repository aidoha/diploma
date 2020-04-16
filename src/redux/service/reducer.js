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
  error: false,
  success: false,
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
        error: payload,
      };
    case SERVICE_SUCCESS:
      return {
        ...state,
        success: payload,
      };
    default:
      return state;
  }
};

export default reducer;
