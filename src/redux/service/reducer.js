import {
  UPDATE_NAME,
  UPDATE_SUBCATEGORY,
  UPDATE_SERVICE,
  UPDATE_DESCRIPTION,
  UPDATE_DURATION,
  UPDATE_PRICE,
  UPDATE_SUBCATEGORY_ID,
  UPDATE_SUBCATEGORY_IDS,
  UPDATE_SERVICE_ID,
} from './types';

const intialState = {
  name: '',
  subcategories: [],
  services: [],
  description: '',
  duration: '',
  price: 0,
  business_ids: {
    service: 0,
    subcategory: 0,
    subcategories: [],
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
        business_ids: {
          ...state.business_ids,
          subcategory: payload,
        },
      };
    case UPDATE_SERVICE_ID:
      return {
        ...state,
        business_ids: {
          ...state.business_ids,
          service: payload,
        },
      };
    case UPDATE_SUBCATEGORY_IDS:
      return {
        ...state,
        business_ids: {
          ...state.business_ids,
          subcategories: payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
